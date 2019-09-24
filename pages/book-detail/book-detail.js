// pages/book-detail/book-detail.js
import {BookModel} from "../../models/Book";

const bookModel = new BookModel
Page({

    /**
     * 页面的初始数据
     */
    data: {
        comments: [],
        book: null,
        likeStatus: false,
        likeCount: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const bid = options.bid
        const detail = bookModel.getDetail(bid)
        const likeStatus = bookModel.getLikeStatus(bid)
        const comments = bookModel.getComments(bid)
        console.log(bid)
        detail.then(res => {
            console.log(res, 1)
            this.setData({
                book: res ? res : null
            })
        })
        comments.then(res => {
            console.log(res, 2)
            this.setData({
                comments: res ? res : null
            })
        })
        likeStatus.then(res => {
            console.log(res, 3)
            this.setData({
                likeStatus: res.like_status ? res.like_status : null,
                likeCount: res.fav_nums ? res.fav_nums : nullga
            })
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