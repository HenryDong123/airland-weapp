// components/like/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		like: false,
		count: 9,
		test: 99
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onLike(e) {
			console.log()
			this.setData({
				like: !this.data.like
			})
		}
	}
})
