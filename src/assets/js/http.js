/** 2018/2/23 17:42
 *  作者:周志豪
 *  功能:封装请求方法
 *  备注:
 */

import axios from 'axios'
import qs from 'qs'
import { Spin,Modal } from 'iview'

axios.defaults.timeout = 1000 * 50;
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  Spin.show({
    size:'large'
  });
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
    Spin.hide();
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
    Spin.hide();
    return Promise.reject(error);
  });

export default axios
