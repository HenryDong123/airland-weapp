// pages/book-detail/book-detail.js
import {BookModel} from "../../models/Book";
import {LikeModel} from "../../models/Like";

const bookModel = new BookModel()
const likeModel = new LikeModel()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        comments: [],
        detail: null,
        book: null,
        likeStatus: false,
        likeCount: 0,
        posting: false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading()
        const bid = options.bid
        const detail = bookModel.getDetail(bid)
        const likeStatus = bookModel.getLikeStatus(bid)
        const comments = bookModel.getComments(bid)

        Promise.all([detail, likeStatus, comments])
            .then(res => {
                console.log(res)
                this.setData({
                    book: res ? res[0].data : null,
                    comments: res ? res[2].data.comments : null,
                    likeStatus: res ? res[1].data.like_status : null,
                    likeCount: res ? res[1].data.fav_nums : null
                })
                wx.hideLoading()
            })
        console.log(bid)
        // detail.then(res => {
        //     this.setData({
        //         book: res ? res.data : null
        //     })
        // })
        // comments.then(res => {
        //     this.setData({
        //         comments: res ? res.data.comments : null
        //     })
        //     console.log(res)
        // })
        // likeStatus.then(res => {
        //     console.log(res)
        //     this.setData({
        //         likeStatus: res.data.like_status ? res.data.like_status : null,
        //         likeCount: res.data.fav_nums ? res.data.fav_nums : null
        //     })
        // })
    },

    onLike(e) {
        const like_or_cancel = e.detail.behavior
        likeModel.like(like_or_cancel, this.data.book.id, 400)
    },
    onFakePost() {
        this.setData({
            posting: true
        })
    },
    onCancel() {
        this.setData({
            posting: false
        })
    },
    onPost(e) {
        const comment = e.detail.text || e.detail.value
        // const commentInput = e.detail.value
        if (!comment) {
            return
        }
        if (comment.length > 12) {
            wx.showToast({
                title: '短评最多12字',
                icon: 'none'
            })
            return
        }
        bookModel.postComments(this.data.book.id, comment).then(res => {

            this.data.comments.unshift({content: comment, nums: 1})
            this.setData({
                comments: this.data.comments,
                posting: false
            })
            wx.showToast({
                title: '添加成功',
                icon: 'none'
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