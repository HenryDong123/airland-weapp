import {Http} from "../util/Http";
const URL = {
    GET_HOT_List: 'book/hot_list'
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
}