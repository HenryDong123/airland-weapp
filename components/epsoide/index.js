// components/epsoide/index.js
Component({
		/**
		 * 组件的属性列表
		 */
		properties: {
				index: {
						type: String,
						observer(newVal, oldVal, changedPath) {
								let _newVal = newVal + ''
								let _index = _newVal.replace(/\b\d\b/g, '0$&')
								this.setData({
										_index
								})
						}
				}
		},

		/**
		 * 组件的初始数据
		 */
		data: {
				months: [
						'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
						'十二月'
				],
				year: null,
				month: null,
				_index: ''
		},
		attached() {
				let date = new Date()
				let year = date.getFullYear()
				let month = this.data.months[date.getMonth() + 1]
				this.setData({
						year,
						month
				})
		},
		/**
		 * 组件的方法列表
		 */
		methods: {}
})
