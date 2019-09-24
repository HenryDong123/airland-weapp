import {Http} from "../util/Http";
const URL = {
    GET_HOT_List: 'book/hot_list',
    GET_BOOK_COUNT: '/book/favor/count',
}
export class BookModel extends Http{
    constructor(){
        let params = {}
        super()
    }
    getHotList(){
        this.params ={
            url: URL.GET_HOT_List
        }
        return this.request(this.params)
    }
    getBookCount(){
        this.params = {
            url: URL.GET_BOOK_COUNT
        }
        return this.request(this.params)
    }
    getDetail(bid){
        this.params = {
            url: `book/${bid}/detail`
        }
        return this.request(this.params)
    }
    getLikeStatus(bid){
        return this.request({
            url: `/book/${bid}/favor`
        })
    }
    getComments(bid){
        return this.request({
            url: `book/${bid}/short_comment`
        })
    }
}