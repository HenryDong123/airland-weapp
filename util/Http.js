import {config} from '../config'
const tips = {
		1: '抱歉，出现了错误',
		1005: 'appkey无效',
		3000: '期刊不存在'
}
export class Http {
		request({url,data,method = 'GET'}) {
				return new Promise((resolve, reject)=>{
						wx.request({
								url: config.BASE_URL + url,
								method,
								data,
								header: {
										'content-type': 'application/json',
										'appkey': config.APP_KEY
								},
								success:  (res) => {
										const code =  res.statusCode + ''
										if (code.startsWith('2')) {
												resolve(res)
										}else {
												this._showError(res.data.error_code)
												reject(res)
										}
								},
								fail: (err) => {
										this._showError(1)
										reject(err)
								}
						})
				})
		}
		_showError(errorCode) {
				if (!errorCode){
						errorCode = 1
				}
				wx.showToast({
						title: tips[errorCode],
						icon: 'none',
						duration: 2000
				})
		}
}
