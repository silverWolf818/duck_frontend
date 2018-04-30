import Vue from 'vue'
import Test from './test.vue'

Test.newInstance = properties => {
  const _props = properties || {};
  const Instance = new Vue({
    data: Object.assign({}, _props, {}),
    render (h) {
      let vnode = '';
      if (this.render) {
        vnode = h(Test, {
          props: {
           text:'aaaaa'
          }
        }, [this.render(h)]);
      }
      return h('div', {
        'class': 'sdfsdfsdfd'
      }, [vnode]);
    }
  });
  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const test = Instance.$children[0];
    return {
      show () {
        test.visible = true;
      },
      component: test
    }
}

export default Test
