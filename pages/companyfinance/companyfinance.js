//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
var config = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNo : 1,
    pageSize : 3,
    companyFinanceListCount : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var param = {
      pageNo:this.data.pageNo,
      pageSize:this.data.pageSize
    };
    this.getCompanyFinanceList(param);
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
    var pageNo = this.data.pageNo + 1;
    var maxPageNo = this.data.companyFinanceListCount % this.data.pageSize == 0 ? this.data.companyFinanceListCount / this.data.pageSize : parseInt(this.data.companyFinanceListCount / this.data.pageSize) + 1
    console.log(pageNo);
    console.log(maxPageNo);
    if (pageNo > maxPageNo) {
      console.log("already end");
      return ;
    }
    var param = {
      pageNo: pageNo,
      pageSize: this.data.pageSize
    };
    this.getCompanyFinanceList(param);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 获取采购管理列表
   */
  getCompanyFinanceList : function(data) {
    var that = this;
    util.https(config.APIURL.getCompanyFinanceListUrl, "POST", data,
      function (data) {
        console.log(data);
        if (data.code == 0) {
          that.setData({
            companyFinanceListData : data.data.data,
            companyFinanceListCount : data.data.totalCount
          })
        }
      }
    )
  }

})