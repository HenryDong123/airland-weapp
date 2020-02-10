// components/search/index.js
import {KeywordModel} from '../../models/keyword'
import {BookModel} from '../../models/Book'

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

    /**
     * 组件的初始数据
     */
    data: {
        historyWords: [],
        hotWords: [],
        dataArray: [],
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
            console.log(2323)
            if (!this.data.word) {
                return
            }
            const length = this.data.dataArray.length
            bookModel.search({start: length, q: this.data.word}).then(res => {
                const tem = this.data.dataArray.concat(res.data.books)
                this.setData({
                    dataArray: tem
                })
            })
        },
        onCancel(e) {
            this.triggerEvent('cancel')

            console.log(222)

        },
        onDelete(e) {
            // this.triggerEvent('delete')
            this.setData({
                searching: false,
            })
        },
        onConfirm(e) {
            this.setData({
                searching: true,
                word: e.detail.value || e.detail.text

            })
            const word = e.detail.value || e.detail.text
            bookModel.search({start: 0, q: word}).then(
                res => {
                    this.setData({
                        dataArray: res.data.books,
                    })
                    keywordModel.addToHistory(word)

                }
            )
        }
    }
})
