import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import project from './modules/project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index,
    project
  }
})

