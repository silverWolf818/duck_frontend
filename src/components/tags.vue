<template>
    <div class="layout-tags">
      <Tag v-for="(item,index) in list"
           type="dot"
           :name="item.menuCode"
           :key="index"
           @on-close="close"
           @click.native="linkTo(item.menuCode)"
           :closable="closabled(item.menuCode)"
           :color="colored(item.menuCode)">{{ item.menuName }}</Tag>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
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
    ...mapActions([
      'changeTag'
    ]),
    close(e,name){
      this.changeTag(name);
    },
    linkTo(data){
      this.$emit('linkTo',data);
    },
    closabled(data){
      if(data === 'home'){
        return false;
      }else{
        return this.colored(data) !== 'blue';
      }
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
  z-index: 10;
  box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
  transition: padding .3s;
}
</style>
