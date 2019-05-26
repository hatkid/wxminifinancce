var app = getApp();

/**
 * 公共微信https请求封装
 * @param url
 * @param type
 * @param data
 * @param callBack
 */
function https(url, type, data, callBack, header) {
  console.log(url);
  wx.showNavigationBarLoading();
  wx.request({
    url: url,
    method: type,
    data: data,
    header: header ? header : ({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + wx.getStorageSync('token')
    }),
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error);
    }
  })
}

module.exports = {
  https: https
}
