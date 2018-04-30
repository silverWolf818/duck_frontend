// initial state
const state = {
    count:3
};

// getters
const getters = {
    getCount:state => state.count
};

// mutations
const mutations = {
  increment(state,param) {
    state.count += param.amount;
  }
};

// actions
const actions = {
  increment ({ commit },param) {
    console.log(param);
    commit('increment',{
      amount:10
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}
