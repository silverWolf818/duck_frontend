import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'
import index from './modules/index'
import index2 from './modules/index2'
import project from './modules/project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index,
    index2,
    test,
    project
  }
})
