// components/classic/music/index.js
import {classicBeh} from "../classic-beh";

const mMgr = wx.getBackgroundAudioManager()
Component({
    /**
     * 组件的属性列表
     */
    behaviors: [classicBeh],
    properties: {
        musicSrc: String,
        title: String
    },

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
        onPlay() {
            if (this.data.playing) {
                this.setData({
                    playing: false
                })
                mMgr.pause()
            } else {
                this.setData({
                    playing: true
                })
                mMgr.title = this.properties.title
                mMgr.src = this.properties.musicSrc
            }

        }
    }
})
