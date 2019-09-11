//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
var config = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTip:false, // 列表滑动到底的标识
    pageNo: 1, // 页码
    pageSize: 4, // 每页数据
    companyFinanceListData: [], // 
    companyFinanceListCount: 0, //记录总条数，默认为0
    screenHeight: 0 //屏幕高度，默认为0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screenHeight:res.screenHeight
        });
      },
    })
    // 初始化查询参数
    var param = {
      pageNo: this.data.pageNo,
      pageSize: this.data.pageSize
    };
    // 查询列表
    this.getCompanyFinanceList(param);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh");
    // 初始化查询参数
    var param = {
      pageNo: 1,
      pageSize: this.data.pageSize
    };
    this.setData({
      pageNo: 1,
      companyFinanceListData: []
    });
    // 查询列表
    this.getCompanyFinanceList(param);
    wx.stopPullDownRefresh;
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  loadMore: function() {
    var pageNo = this.data.pageNo;
    var maxPageNo = this.data.companyFinanceListCount % this.data.pageSize == 0 ? this.data.companyFinanceListCount / this.data.pageSize :                                parseInt(this.data.companyFinanceListCount / this.data.pageSize) + 1;
    if (pageNo >= maxPageNo) {
      this.setData({
        scrollTip:true
      });
      var fadeOutTimeout = setTimeout(() => {
        this.setData({
          scrollTip: false
        });
        clearTimeout(fadeOutTimeout);
      }, 2000);
      return;
    }
  
    this.setData({
      pageNo: this.data.pageNo + 1
    });

    
    pageNo = this.data.pageNo;
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
  getCompanyFinanceList: function(data) {
    var that = this;
    util.https(config.APIURL.getCompanyFinanceListUrl, "POST", data,
      function(data) {
        if (data.code == 0) {
          that.setData({
            companyFinanceListData: that.data.companyFinanceListData.concat(data.data.data),
            companyFinanceListCount: data.data.totalCount
          })
        }
      }
    )
  }

})