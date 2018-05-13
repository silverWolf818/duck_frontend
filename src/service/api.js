import request from '../assets/js/request'

//通用请求方法，一般用于组件使用

//查询
export async function queryApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      data:params
    }
  });
}
//新增
export async function addApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      data:params
    }
  });
}
//删除
export async function removeApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      data:params
    }
  });
}
//更新
export async function updateApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      data:params
    }
  });
}

//自定义请求接口

//用户登录
export async function auth(params) {
  return request('auth',{
    mock:true,
    body:{
      data:params
    }
  });
}
export async function menu(params) {
  return request('menu',{
    mock:true,
    body:{
      data:params
    }
  });
}

export async function user(params) {
  return request('user',{
    mock:true,
    body:{
      data:params
    }
  });
}


export async function queryTest(params) {
  return request('test',{
    mock:true,
    body:{
      data:params
    }
  });
}

