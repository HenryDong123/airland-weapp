// pages/my/my.js
import {
    ClassicModel
} from '../../models/Classic.js'
import {
    BookModel
} from '../../models/Book.js'

// import {
//     promisic
// } from '../../util/common.js'

const classicModel = new ClassicModel()
const bookModel = new BookModel()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        authorized: false,
        userInfo: null,
        bookLikeCount: 0,
        classic:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onGetUserInfo(e) {
        const userInfo = e.detail.userInfo
        if (userInfo) {
            this.setData({
                userInfo,
                authorized: true
            })
        }
    },
    userAuthorized() {
        wx.getSetting({
            success: res => {
                console.log(res.authSetting['scope.userInfo'])
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: res => {
                            this.setData({
                                authorized: true,
                                userInfo: res.userInfo
                            })
                        }
                    })
                }
            }
        })
    },
    onJumpToAbout(e) {
        wx.navigateTo({
            url: '/pages/about/about'
        })
    },
    onStudy() {
        wx.navigateTo({
            url: '/pages/course/course'
        })
    },
    getMyBookCount() {
        bookModel.getBookCount()
            .then(res => {
                this.setData({
                    bookLikeCount: res.data.count
                })
            })
    },
    getMyFavor(){
      classicModel.getMyFavor().then(res => {
          console.log(res,111)
          this.setData({
              classic:res.data
          })
      })
    },
    onLoad: function (options) {
        this.userAuthorized()
        this.getMyBookCount()
        this.getMyFavor()
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