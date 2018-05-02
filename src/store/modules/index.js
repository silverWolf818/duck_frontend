import { INITMENU,USERINFO } from '../mutation-types'
import { menu,user } from  '../../service/api'
// initial state
const state = {
  menu:[],
  user:{},
  openNames:'',
  activeName:''
};

// getters
const getters = {
  getOpenNames:state => state.openNames,
  getActiveName: state => state.activeName,
  getMenu:state => state.menu,
  getUser:state => state.user
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
