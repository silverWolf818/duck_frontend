/** 2018/2/23 17:42
 *  作者:周志豪
 *  功能:封装请求方法
 *  备注:
 */

import axios from 'axios'
import qs from 'qs'
import { Modal } from 'iview'

//mock地址
const mockUrl = 'http://yapi.demo.qunar.com/mock/6440/';

//http请求地址配置
const config = {
  type:ENV_TYPE,
  serverUrl () {
    switch (this.type) {
      case 'build':
        return location.origin;
      case 'dev'://开发
        return 'http://39.107.101.54:8080';
      case 'test'://测试
        return 'http://www.neepp.net';
    }
  },
  api (param) {
    let url = this.serverUrl();
    switch (param) {
      case 'menu':
        return url + '/pages/user/menus';
      case 'upload':
        return url + '/rest/upload/uploadfiletooss';
      case 'down':
        return url + '/rest/download';
      case 'havePerms':
        return url + '/rest/user/havePerms?';
      default:
        return url + '/rest/service/routing/' + param;
    }
  }
};

//axios默认参数配置
axios.defaults.timeout = 1000 * 50;
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  if(config.method === "post") {
    config.data = qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function (res) {
  let result;
  switch (res.status) {
    case 404:
      console.log("404");
      break;
    case 500:
      console.log("服务器出错");
      break;
    case 401:
      console.log("401");
      break;
    case 200:
      let data = res.data;
      if (data.respCode === '0000') {
        result = data.data;
      }else{
        Modal.error({
          title: '错误',
          content: data.respDesc ? data.respDesc :'网络繁忙！'
        });
      }
      break;
  }
  //在这里对返回的数据进行处理
  return result;
}, function (error) {
  return Promise.reject(error);
});

export default function request(url,option) {
  const httpUrl = option.mock ? mockUrl + url : config.api(url);
  const reqUrl = option.body.method === 'GET' ? httpUrl + option.body.data : httpUrl;
  const defaultOptions = {
    method:'POST',
    url:reqUrl
  };
  const newOptions = { ...defaultOptions, ...option.body };
  return axios({
    ...newOptions
  }).then((res) => {
      return res
  })
}
