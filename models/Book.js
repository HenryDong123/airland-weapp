import {Http} from "../util/Http";

export class BookModel extends Http{
    constructor(){
        let params = {}
        super()
    }
    getHotList(){
        this.params ={
            url: 'book/hot_list',
        }
        return this.request(this.params)
    }
}