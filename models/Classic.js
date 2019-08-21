import {Http} from "../util/Http";

export class ClassicModel extends Http {
    getLatest() {
        return this.request({
            url: 'classic/latest',
        }).then(res => {
            this._setLatestIdex(res.data.index)
            let key = this._getKey(res.data.index)
            wx.setStorageSync(key, res)
            return res
        })
    }

    getClassic(index, nextOrPrev) {
        let params = {
            url: `classic/${index}/${nextOrPrev}`
        }
        let key = nextOrPrev === 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
        let classic = wx.getStorageSync(key)
        if (!classic) {
            return this.request(params)
                .then(res => {
                	let key = this._getKey(res.data.index)
                    wx.setStorageSync(key, res)
					return res
                })
        } else {
        	return new Promise((resolve, reject) => {
        	    resolve(classic)
            })
        }

    }

    isLatest(index) {
        return index === 1
    }

    isFirst(index) {
        let latestIndex = this._getLatetsIndex()
        return latestIndex === index
    }

    _setLatestIdex(index) {
        wx.setStorageSync('latest', index)
    }

    _getLatetsIndex() {
        return wx.getStorageSync('latest')
    }

    _getKey(index) {
		return 'classic-' + index
    }
}
