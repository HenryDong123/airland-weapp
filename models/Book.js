import {Http} from "../util/Http";
const URL = {
    GET_HOT_List: 'book/hot_list',
    GET_BOOK_COUNT: '/book/favor/count'
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
    getBookDetail(){
        this.params = {
        }
        return this.request(this.params)
    }
}