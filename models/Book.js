import {Http} from "../util/Http";
const URL = {
    GET_HOT_List: 'book/hot_list',
    GET_BOOK_COUNT: '/book/favor/count',
    GET_DETAIL: `book/${bid}/detail`,
    GET_LIKE_STATUS: `/book/${bid}/favor`,
    GET_COMMENTS: `book/${bid}/short_comment`
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
            url: URL.GET_DETAIL
        }
        return this.request(this.params)
    }
    getLikeStatus(bid){
        return this.request({
            url: URL.GET_LIKE_STATUS
        })
    }
    getComments(bid){
        return this.request({
            url: URL.GET_COMMENTS
        })
    }
}