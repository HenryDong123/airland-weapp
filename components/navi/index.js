// components/navi/navi.js
Component({
		/**
		 * 组件的属性列表
		 */
		properties: {
				title: String,
				first: Boolean,
				latest: Boolean
		},

		/**
		 * 组件的初始数据
		 */
		data: {
				disLeftSrc: '../image/triangle.dis@left.png',
				leftSrc: '../image/triangle@left.png',
				disRightSrc: '../image/triangle.dis@right.png',
				rightSrc: '../image/triangle@right.png'
		},
		/**
		 * 组件的方法列表
		 */
		methods: {
				onLeft: function (event) {
						if (!this.properties.first) {
								this.triggerEvent('left', {}, {})
								console.log(11)
						}
				},

				onRight: function (event) {
						if (!this.properties.latest) {
								this.triggerEvent('right', {}, {})
						}
				}

		}
})
