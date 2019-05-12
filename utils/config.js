;
// 主机域名
var host = 'http://localhost/';

// 全局配置常量
var config = {
  // 接口地址
  APIURL : {
    loginUrl : host + 'login',  // 登陆地址
    getMainPageDataUrl: host + 'getMainPageData', // 获取主页数据接口
    host : host  // 域名
  }
};

module.exports = config;