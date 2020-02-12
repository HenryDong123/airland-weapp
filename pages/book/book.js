// pages/book/Book.js
import {BookModel} from '../../models/Book'
import {random} from "../../util/common";

const bookModel = new BookModel()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        books: [],
        searching: false,
        more: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        const books = await bookModel.getHotList()
        this.setData({
            books:books.data
        })
        // .then(res => {
        //     console.log(res)
        //     this.setData({
        //         books: res.data
        //     })
        // })
    },
    click(e) {
        console.log(e)
    },
    onSearching() {
        this.setData({
            searching: true
        })
    },
    onCancel() {
        console.log(11)
        this.setData({
            searching: false
        })
    },
    onDelete() {
        this.setData({})
    },
    onReachBottom() {
        this.setData({
            more: random(16)
        })
        console.log(this.data.more)

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
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})