/** 2018/2/26 22:38
 *  作者:周志豪
 *  功能:
 *  备注:
 */
import Mock from 'mockjs'

Mock.mock('carts', 'post', {
  "respDesc": '成功',
  "data": [
    {
      "isSelected": true,
      "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t2188/335/120248995/69685/87527525/55efa22bNa1eb37da.jpg",
      "productName": "深入浅出Node.js",
      "productInfo": "书名：Node.js学习",
      "productPrice": 57.8,
      "productCount": 3
    },
    {
      "isSelected": true,
      "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t9508/97/2285719018/62961/99c5b1b7/59f299b4Nc9e78adb.jpg",
      "productName": "Vue.js实战",
      "productInfo": "书名：Vue.js实战",
      "productPrice": 62.4,
      "productCount": 2
    },
    {
      "isSelected": true,
      "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
      "productName": "JavaScript高级程序设计",
      "productInfo": "书名：JavaScript高级程序设计（第3版）",
      "productPrice": 78.2,
      "productCount": 4
    },
    {
      "isSelected": true,
      "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t2047/63/2033152973/398005/5ea9044e/56ea5e6aN38c0f2b8.jpg",
      "productName": "OReilly精品图书系列：JavaScript权威指南",
      "productInfo": "书名：JavaScript权威指南",
      "productPrice": 123.7,
      "productCount": 2
    }
  ],
  "respCode": "0000"
});
Mock.mock('menu', 'post', {
  "respDesc": "success",
  "data": [
    {
      "autoId": 8,
      "parentId": 1,
      "menuName": "首页",
      "menuCode": "index",
      "menuUrl": "/index",
      "subMenus": [
        {
          "autoId": 100,
          "parentId": 8,
          "menuName": "表单页",
          "menuCode": "forms",
          "menuUrl": "",
          "subMenus": [
            {
            "autoId": 10002,
            "parentId": 100,
            "menuName": "基础表单",
            "menuCode": "baseForm",
            "menuUrl": "/form/baseForm"
          }, {
            "autoId": 10003,
            "parentId": 100,
            "menuName": "高级表单",
            "menuCode": "advForm",
            "menuUrl": "/form/advForm"
          }]
        },{
          "autoId": 102,
          "parentId": 8,
          "menuName": "查询页",
          "menuCode": "query",
          "menuUrl": "",
          "subMenus": [{
            "autoId": 10200,
            "parentId": 102,
            "menuName": "基础查询页",
            "menuCode": "baseQuery",
            "menuUrl": "query/baseQuery"
          }, {
            "autoId": 10201,
            "parentId": 102,
            "menuName": "带选项卡查询页",
            "menuCode": "tabQuery",
            "menuUrl": "query/tabQuery"
          }]
        },{
          "autoId": 103,
          "parentId": 8,
          "menuName": "详情页",
          "menuCode": "detail",
          "menuUrl": "",
          "subMenus": [{
            "autoId": 10300,
            "parentId": 103,
            "menuName": "基础详情页",
            "menuCode": "baseDetail",
            "menuUrl": "detail/baseDetail"
          }]
        }]
    },{
      "autoId": 9,
      "parentId": 2,
      "menuName": "组件",
      "menuCode": "component",
      "menuUrl": "",
      "subMenus":[{
        "autoId": 201,
        "parentId": 9,
        "menuName": "表单类",
        "menuCode": "formComponent",
        "subMenus":[{
          "autoId": 2001,
          "parentId": 201,
          "menuName": "输入框",
          "menuCode": "input",
          "menuUrl": "/formComponent/input"
        },{
          "autoId": 2002,
          "parentId": 201,
          "menuName": "单选框",
          "menuCode": "radio",
          "menuUrl": "/formComponent/radio"
        },{
          "autoId": 2003,
          "parentId": 201,
          "menuName": "多选框",
          "menuCode": "checkbox",
          "menuUrl": "/formComponent/checkbox"
        },{
          "autoId": 2004,
          "parentId": 201,
          "menuName": "选择框",
          "menuCode": "select",
          "menuUrl": "/formComponent/select"
        },{
          "autoId": 2005,
          "parentId": 201,
          "menuName": "日期选择器",
          "menuCode": "date",
          "menuUrl": "/formComponent/date"
        },{
          "autoId": 2006,
          "parentId": 201,
          "menuName": "级联选择",
          "menuCode": "cascader",
          "menuUrl": "/formComponent/cascader"
        },{
          "autoId": 2007,
          "parentId": 201,
          "menuName": "地址选择",
          "menuCode": "area",
          "menuUrl": "/formComponent/area"
        },{
          "autoId": 2007,
          "parentId": 201,
          "menuName": "上传",
          "menuCode": "upload",
          "menuUrl": "/formComponent/upload"
        },{
          "autoId": 2008,
          "parentId": 201,
          "menuName": "富文本编辑器",
          "menuCode": "textEditor",
          "menuUrl": "/formComponent/textEditor"
        }]
      }]
    }],
  "respCode": "0000"
});


Mock.mock('menus', 'post', {
  "respDesc": "success",
  "data": [
    {
      "respDesc":"success",
      "data":{
      "userName":"周大侠",
      "userIcon":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524760673136&di=3b75c08b91e70155a19775050473c868&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa5c27d1ed21b0ef45f4d2b59d7c451da81cb3e0b.jpg"
      }
      ,
      "respCode":"0000"
    },
    {
      "menuName": "表单页",
      "menuIcon":"compose",
      "menuCode": "form",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "基础表单",
          "menuCode": "baseForm",
          "menuUrl": "/baseForm"
        },{
          "menuName": "高级表单",
          "menuCode": "advForm",
          "menuUrl": "/advForm"
        }]
    }, {
      "menuName": "列表页",
      "menuIcon":"ios-grid-view",
      "menuCode": "list",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "查询表格",
          "menuCode": "baseQuery",
          "menuUrl": "/baseQuery"
        },{
          "menuName": "选项卡表格",
          "menuCode": "tabQuery",
          "menuUrl": "/tabQuery"
        }]
    }, {
      "menuName": "详情页",
      "menuIcon":"ios-list-outline",
      "menuCode": "detail",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "基础详情页",
          "menuCode": "baseDetail",
          "menuUrl": "/baseDetail"
        },{
          "menuName": "高级详情页",
          "menuCode": "advDetail",
          "menuUrl": "/advDetail"
        }]
    }, {
      "menuName": "结果页",
      "menuIcon":"ios-checkmark-outline",
      "menuCode": "result",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "成功",
          "menuCode": "success",
          "menuUrl": "/success"
        },
        {
          "menuName": "失败",
          "menuCode": "fail",
          "menuUrl": "/fail"
        }]
    }],
  "respCode": "0000"
});
