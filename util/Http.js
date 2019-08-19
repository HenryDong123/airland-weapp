import {config} from '../config'

export class Http {
		request(params) {
				if (!params.method) {
						params.method = 'GET'
				}
				return new Promise((resolve, reject)=>{
						wx.request({
								url: config.BASE_URL + params.url,
								method: params.method,
								data: params.data,
								header: {
										'content-type': 'application/json',
										'appkey': config.APP_KEY
								},
								success:  (res) => {
										let code =  res.statusCode + ''
										if (code.startsWith('2')) {
												resolve(res)
										}else {
												reject(res)
										}
								},
								fail: (err) => {
										reject(err)
								}
						})
				})
		}
}
