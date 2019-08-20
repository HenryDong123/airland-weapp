import {Http} from "../util/Http";

export class ClassicModel extends Http {
		getLatest() {
				return this.request({
						url: 'classic/latest',
				}).then(res => {
						this._setLatestIdex(res.data.index)
						return res
				})
		}

		getClassic(index, nextOrPrev) {
				let params = {
						url: `classic/${index}/${nextOrPrev}`
				}
				return this.request(params)
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
}
