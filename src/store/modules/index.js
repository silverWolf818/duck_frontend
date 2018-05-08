import { INITMENU,USERINFO,CRUMBINFO,CHANGETAG,RESET_START } from '../mutation-types'
import { menu,user } from  '../../service/api'
// initial state
const initState = {
  menu:[],
  user:{},
  openNames:'',
  activeName:'',
  tags:{
    list:[{
      menuCode: "home",
      menuName: "首页"
    }],
    active:''
  },
  activeInfo:{},
  step:[{
    name:'首页'
  },{
    name:''
  },{
    name:''
  }],
  temp:''
}
const state = JSON.parse(JSON.stringify(initState));

// getters
const getters = {
    getOpenNames: state => state.openNames,
    getActiveName: state => state.activeName,
    getMenu: state => state.menu,
    getUser: state => state.user,
    getCrumb: state => state.step,
    getTags: state => state.tags
}
;

// mutations
const mutations = {
  [INITMENU](state,payload){
    let activeName = sessionStorage.getItem('activeName');
    state.menu = payload;
    state.activeName = activeName ? activeName : 'home';
    state.activeName === 'home' ? changeMenu('home') : changeMenu();
  },
  [CRUMBINFO](state,payload){
    state.activeName = payload;
    payload === 'home' ? changeMenu('home') : changeMenu();
  },
  [USERINFO](state,payload){
    state.user = payload;
  },
  [CHANGETAG](state,payload){
    state.tags.list = state.tags.list.filter(item => item.menuCode !== payload);
  },
  [RESET_START](state){
    Object.assign(state,JSON.parse(JSON.stringify(initState)));
  }
};

// actions
const actions = {
  initMenu( { commit } ,payload) {
    menu().then(res => {
      commit(INITMENU ,res);
      payload.$nextTick(()=> {
        payload.$refs.menu.updateOpened();
        payload.$refs.menu.updateActiveName();
      });
    });
  },
  crumbInfo( { commit } ,payload) {
    commit(CRUMBINFO ,payload);
  },
  changeTag({ commit } ,payload){
    commit(CHANGETAG ,payload);
  },
  userInfo( { commit } ){
    user().then(res => {
      commit(USERINFO ,res);
    });
  },
  resetStates:function (context, payLoad) {
    context.commit(RESET_START, payLoad);
  }
};

function changeMenu(type){
  if(type){//home默认加载
    state.openNames = type;
    state.tags.active = type;
    state.step[1].name = state.step[2].name = '';
  }else{
    queryCode(state.menu,'menuCode',state.activeName);//查询当前菜单信息
    state.activeInfo = state.temp;
    state.tags.active = state.activeInfo.menuCode;//标签当前激活状态code
    state.step[2].name = state.temp.menuName;//面包屑三级
    queryCode(state.menu,'autoId',state.temp.parentId);//查询当前父级节点菜单信息
    state.step[1].name = state.temp.menuName;//面包屑二级
    state.openNames = state.temp.menuCode;//当前展开的菜单
    state.tags.list.push(state.activeInfo);//一次追加标签
    state.tags.list = _.uniqBy(state.tags.list, 'menuCode');//标签去重
  }
}

function queryCode(menu,code,active){
  menu.forEach(item => {
    if(item[code] === active){
      state.temp = item;
      return item;
    }else if(item.subMenus.length > 0){
      queryCode(item.subMenus,code,active);
    }
  });
}

export default {
  state,
  getters,
  actions,
  mutations
}
