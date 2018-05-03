import { INITMENU,USERINFO,CRUMBINFO } from '../mutation-types'
import { menu,user } from  '../../service/api'
// initial state
const state = {
  menu:[],
  user:{},
  openNames:'',
  activeName:'',
  active:'',
  step:[{
    name:'我的首页'
  },{
    name:''
  },{
    name:''
  }]
};

// getters
const getters = {
  getOpenNames:state => state.openNames,
  getActiveName: state => state.activeName,
  getMenu:state => state.menu,
  getUser:state => state.user,
  getCrumb:state => {
    if(state.menu.length > 0){
      let pid = '';
      state.menu.forEach(value => {
        let a = value.subMenus.filter(item => item.menuCode === state.activeName);
        if(a.length === 1){
          pid = a[0].parentId;
          state.step[2].name = a[0].menuName;
        }
      });
      state.step[1].name = state.menu.filter(item => item.autoId === pid)[0].menuName;
      return state.step;
    }
  }
};

// mutations
const mutations = {
  [INITMENU](state,payload){
    let openNames = sessionStorage.getItem('openNames');
    let activeName = sessionStorage.getItem('activeName');
    state.menu = payload;
    state.openNames = openNames ? openNames : payload[0].menuCode;
    state.activeName = activeName ? activeName : payload[0].subMenus[0].menuCode;
  },
  [USERINFO](state,payload){
    state.user = payload;
  },
  [CRUMBINFO](state,payload){
    state.activeName = payload;
  }
};

// actions
const actions = {
  initMenu( { commit } ,payload) {
    menu({},true).then(res => {
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
  userInfo( { commit } ){
    user({},true).then(res => {
      commit(USERINFO ,res);
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
