;
// 主机域名
var host = 'http://localhost/';

host = 'http://118.24.169.20:8081/';

var companyFinance = 'companyfinance/'; //采购管理base url

// 全局配置常量
var config = {
  // 接口地址
  APIURL : {
    loginUrl : host + 'login',  // 登陆
    getMainPageDataUrl : host + 'getMainPageData', // 获取主页数据
    getCompanyFinanceListUrl : host + companyFinance + 'getCompanyFinanceList', // 获取采购管理l列表
    host : host  // 域名
  }
};

module.exports = config;