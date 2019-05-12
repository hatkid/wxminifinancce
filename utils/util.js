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
    if (!data.isHideLoad) {
        wx.showLoading({
            title: '加载中',
        })
    }
    wx.showNavigationBarLoading();
    wx.request({
        url: url,
        method: type,
        data: data,
        header: header ? header : ( {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + wx.getStorageSync('token')
        }),
        success: function (res) {
            callBack(res.data);
        },
        fail: function (error) {
            showToast("收收请求失败");
        },
        complete: function (res) {
            console.log(res);
            if (res.statusCode === 401) {
                showToast("收收请求未授权");
            }
            wx.hideLoading();
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
        }
    })
}

module.exports = {
    https: https
}
