import {Http} from "../util/Http";

const URL = {
    GET_HOT_SEARCH: '/book/hot_keyword',
}

class KeywordModel extends Http {
    key = 'q'
    maxLength = 10

    getHistory() {
        const words = wx.getStorageSync(this.key)
        return words ? words : []
    }



    getHot() {
        let params = {
            url: URL.GET_HOT_SEARCH
        }
        return this.request(params)
    }

    addToHistory(keyword) {
        let words = this.getHistory()
        const has = words.includes(keyword)
        if (!has) {
            const length = words.length
            if (length >= this.maxLength) {
                words.pop()
            }
            words.unshift(keyword)
            wx.setStorageSync(this.key, words)
        }

    }
}

export {KeywordModel}