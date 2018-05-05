<template>
  <div class="layout">
    <profile></profile>
  </div>
</template>
<script>
  import Vue from 'vue'
  const profile = Vue.extend({
    template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
    data: function () {
      return {
        firstName: 'Walter',
        lastName: 'White',
        alias: 'Heisenberg'
      }
    }
  });
  Vue.component('profile',profile);
  import mixinTest from '../assets/js/mixin'
  export default {
    components:{
      profile
    },
    mixins:[mixinTest],
    data(){
      return {
        message: 'goodbye',
        bar: 'def'
      }
    },
    created: function () {
      console.log('组件钩子被调用')
      console.log(this.$data);
    }
  }
</script>
<style scoped lang="scss">

</style>
