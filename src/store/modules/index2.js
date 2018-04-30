import '../../assets/js/request'
import axios from 'axios'
// initial state
const state = {
  isCollapsed: false,
  active:'',
  subActive:'',
  openName:'',
  menu:[],
  subMenu:[],
  flag:'',
  item1:'',
  item2:'',
  step:[{
    name:'我的首页',
    route:'/'
  },{
    name:'',
    route:'/'
  },{
    name:'',
    route:'/'
  }]
};

// getters
const getters = {
  getMenu:state => state.menu,
  getSubMenu:state => state.subMenu,
  getCrumbs:state => {
    let data = [],
        id = '';
    if(state.menu.length !== 0 && state.item1){
      state.step[0].name = state.menu.filter(item => item.menuCode === state.item1)[0].menuName;
      state.item2 && state.subMenu.forEach(value => {
        data = value.subMenus.filter(item => item.menuCode === state.item2)[0];
        if(data && value.autoId === data.parentId){
          state.step[1].name = value.menuName;
          state.step[1].route = '/';
          state.step[2].name = data.menuName;
          state.step[2].route = '/';
        }
      });
      return state.flag ? state.step.filter((item,index) => index === 0) : state.step;
    }
  }
};

// mutations
const mutations = {
  initMenu(state,param){
    state.menu = param;
  },
  changeSubMenu(state,param){
    state.flag = true;
    state.item1 = param;
    state.subMenu = state.menu.filter(item => item.menuCode === param)[0].subMenus;
  },
  changeItem(state,param){
    state.flag = false;
    state.item2 = param;
  }
};

// actions
const actions = {
  initMenu({ commit }){
    axios.post('menu').then(res => {
      commit('initMenu',res);
      commit('changeSubMenu','index');
    });
  },
  changeSubMenu({ commit },param){
    commit('changeSubMenu',param);
  },
  changeItem({ commit },param){
    commit('changeItem',param);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
