import { INITMENU,USERINFO } from '../mutation-types'
import { menu,user } from  '../../service/api'
// initial state
const state = {
  menu:[],
  user:{}
};

// getters
const getters = {
  getMenu:state => state.menu
};

// mutations
const mutations = {
  [INITMENU](state,payload){
    state.menu = payload;
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
    });
  },
  userInfo( { commit } ,payload){
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
