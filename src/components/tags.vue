<template>
    <div class="layout-tags">
      <Tag v-for="(item,index) in list"
           type="dot"
           :key="index"
           @click.native="linkTo(item.menuCode)"
           :closable="closabled(item.menuCode)"
           :color="colored(item.menuCode)">{{ item.menuName }}</Tag>
    </div>
</template>

<script>
export default {
  props:{
    list:{
      type: [Array],
      default() {
        return []
      }
    },
    active:{
      type: [String],
      default: ''
    }
  },
  methods:{
    linkTo(data){
      this.$emit('linkTo',data);
    },
    closabled(data){
      return data !== 'home';
    },
    colored(data){
      if(this.active === 'home'){
        return data === 'home' ? 'blue' : 'default';
      }else{
        return data === this.active ? 'blue' : 'default';
      }
    }
  }
}
</script>

<style scoped>
.layout-tags{
  padding: 10px 24px;
  z-index: 20;
  box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
  transition: padding .3s;
}
</style>
