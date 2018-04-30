import Test from './test/index'
const plugin = {};
plugin.install = function (Vue, opts = {}) {
  Vue.prototype.$test = Test
}

export default plugin
