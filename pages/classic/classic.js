// pages/classic/Classic.js
import {ClassicModel} from "../../models/Classic";
import {LikeModel} from "../../models/Like";

let classicModel = new ClassicModel()
let likeModel = new LikeModel()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classic: null,
        latest: false,
        first: true,
        likeCount: 0,
        likeStatus: false
    },
    onNext() {
        this._updateClassic('previous')
    },
    onPrev() {
        this._updateClassic('next')
    },
    _updateClassic(nextOrPrev) {
        classicModel.getClassic(this.data.classic.index, nextOrPrev)
            .then(res => {
                this.setData({
                    classic: res.data,
                    first: classicModel.isFirst(res.data.index),
                    latest: classicModel.isLatest(res.data.index)
                })
				this._getLikeStatus(res.data.id,res.data.type)
            })
    },
	_getLikeStatus(artId, category){
    	likeModel.getClassicLikeStatus(artId, category)
			.then(res => {
				this.setData({
						likeCount: res.data.fav_nums,
						likeStatus: res.data.like_status
					}
				)
			})

	},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        classicModel.getLatest()
            .then(res => {
                this.setData({
                    classic: res.data,
					likeCount: res.data.fav_nums,
					likeStatus: res.data.like_status
                })
            })

    },
    onLike(e) {
        let {behavior} = e.detail
        likeModel.like(behavior, this.data.classic.id, this.data.classic.type).then(res => {
            console.log(res)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
