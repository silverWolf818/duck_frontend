import { INIT,SET_FORM } from '../mutation-types'
// initial state
const state = {
  type:'',//计划类型
  formBase:{
    purchaseAccount:'',//项目单位
    planName:'',//计划名称
    planCode:'',//计划编号
    planType:'',//计划类型
    planCategory:'',//计划类别
    payType:'',//支付方式
    purchaseMethod:'',//推荐采购方式
    purchaseProfessionalOrgId:'',//专业部门
    projectName:'',//项目名称
    remarks:'',
  },
  wz:{
    deliveryDateMethod:'',//交货期要求方式
    reqArrivalDate:'',//要求到货日期
    reqArrivalTimeInt:''//要求到货时间
  },
  sg:{
    completionPeriodMethod:'',//要求完工日期
    reqCompletionDate:'',//要求完工日期
    reqCompletionTimeInt:''//要求完工时间
  },
  fw:{
    completionPeriodMethod:'',//完成期要求方式
    reqCompletionDate:'',//要求完成日期
    reqCompletionTimeInt:''//要求完成时间
  }
};

// getters
const getters = {
  form:state => {
    return { ...state.formBase,...state[state.type] }
  }
};

// mutations
const mutations = {
  [INIT](state,payload){
    state.type = payload;
  },
  [SET_FORM](state,payload){
    state = { ...state, ...payload }
  }
};

// actions
const actions = {
  init({ commit },payload) {
    commit(INIT,payload);
  },
  setForm({ commit },payload) {
    commit(SET_FORM,payload);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
