// components/search/index.js
import {KeywordModel} from '../../models/keyword'
import {BookModel} from '../../models/Book'
import {paginationBev} from "../behavios/pagination";

const keywordModel = new KeywordModel()
const bookModel = new BookModel()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        more: {
            type: String,
            observer: 'loadMore'
        }
    },
    behaviors: [paginationBev],
    /**
     * 组件的初始数据
     */
    data: {
        historyWords: [],
        hotWords: [],
        searching: false,
        loadingCenter: false,
        loading: false,
        word: ''
    },
    attached() {
        const historyWords = keywordModel.getHistory()
        const hotWords = keywordModel.getHot()
        hotWords.then(res => {
            this.setData({
                historyWords,
                hotWords: res.data.hot
            })
        })

    },
    /**
     * 组件的方法列表
     */
    methods: {
        loadMore() {
            console.log(this.data.total)
            if (!this.data.word) {
                return
            }
            if (this.isLocked()) {
                return
            }
            if (this.hasMore()) {
                this.locked()
                bookModel.search({start: this.getCurrentStart(), q: this.data.word}).then(res => {
                    this.setMoreData(res.data.books)
                    this.unLocked()
                })
            }
        },
        isLocked() {
            return this.data.loading
        },
        locked() {
            this.data.loading = true
        },
        unLocked() {
            this.data.loading = false

        },
        onCancel(e) {
            this.triggerEvent('cancel')

            console.log(222)

        },
        onDelete(e) {
            // this.triggerEvent('delete')
           this.closeResult()
        },
        onConfirm(e) {
            this.showResult()
            this.setData({
                word: e.detail.value || e.detail.text
            })
            this.init()
            const word = e.detail.value || e.detail.text
            bookModel.search({start: 0, q: word}).then(
                res => {
                    this.setMoreData(res.data.books)
                    this.setTotal(res.data.total)
                    keywordModel.addToHistory(word)

                },
                () =>{
                    this.unLocked()
                }
            )
        },
        showResult() {
            this.setData({
                searching: true,
            })
        },
        closeResult(){
            this.setData({
                searching: false,
            })
        }
    }
})
