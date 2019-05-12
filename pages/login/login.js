// pages/login/login.js
//获取应用实例 
var app = getApp();
var util = require('../../utils/util.js');
var config = require('../../utils/config.js');
var inputContent = {}; //输入内容 
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    userName: '',
    password: ''
  },

  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function(options) {

  },

  /** 
   * 生命周期函数--监听页面初次渲染完成 
   */
  onReady: function() {

  },

  /** 
   * 生命周期函数--监听页面显示 
   */
  onShow: function() {

  },

  /** 
   * 生命周期函数--监听页面隐藏 
   */
  onHide: function() {

  },

  /** 
   * 生命周期函数--监听页面卸载 
   */
  onUnload: function() {

  },

  /** 
   * 页面相关事件处理函数--监听用户下拉动作 
   */
  onPullDownRefresh: function() {

  },

  /** 
   * 页面上拉触底事件的处理函数 
   */
  onReachBottom: function() {

  },

  /** 
   * 用户点击右上角分享 
   */
  onShareAppMessage: function() {

  },


  userNameInput: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },

  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  /** 
   * 登录提交 
   */
  loginSubmit: function(e) {
    // 判断用户名是否为空
    if (this.data.userName == '') {
      this.setData({
        popErrorMsg: "账号不能为空"
      });
      this.ohShitfadeOut(); 
      return;
    }
    // 判断密码是否为空
    if (this.data.password == '') {
      this.setData({
        popErrorMsg: "密码不能为空"
      });
      this.ohShitfadeOut();
      return;
    }

    util.https(config.APIURL.loginUrl, 'post', {
      userName: this.data.userName,
      password: this.data.password
    }, function(data) {
      console.log(data);
      if (data.code == 0) {
        wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 2000
        });
        wx.redirectTo({
          url: '../main/main',
        })
      } else {
        wx.showToast({
          title: '登陆失败，请稍后重试...',
          icon: 'success',
          duration: 2000
        })
      }
    }) ;

  },
  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({
        popErrorMsg: ''
      });
      clearTimeout(fadeOutTimeout);
    }, 3000);
  },
})