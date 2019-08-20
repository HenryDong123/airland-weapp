// components/classic/music/index.js
import {classicBeh} from "../classic-beh";

Component({
	/**
	 * 组件的属性列表
	 */
	behaviors: [classicBeh],

	/**
	 * 组件的初始数据
	 */
	data: {
			playing: false,
			pauseSrc: '../../image/player@pause.png',
			playSrc: '../../image/player@play.png',
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
