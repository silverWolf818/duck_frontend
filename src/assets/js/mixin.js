const mixinTest = {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  },
  created(){
    console.log('混入对象的钩子被调用')
    this.hello()
  },
  methods: {
    hello() {
      console.log('mixin');
    }
  }
};
export default mixinTest
