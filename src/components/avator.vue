<template>
    <div class="layout-avator">
      <Tooltip placement="bottom">
        <span class="avator-image"><img :src="userIcon" alt=""></span><span>{{ userName }}</span>
        <div class="avator-info" slot="content">
          <a>个人中心</a>
          <a @click="logout">退出登录</a>
        </div>
      </Tooltip>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
  props:{
    userIcon:{
      type: String,
      default :''
    },
    userName:{
      type: String,
      default :''
    }
  },
  methods: {
    ...mapActions([
      'resetStates'
    ]),
    logout() {
      this.resetStates();
      sessionStorage.clear();
      this.$router.push({
        name:'login'
      });
    }
  }
}
</script>

<style scoped>
.layout-avator{
  float: right;
  margin-right: 20px;
  height: 64px;
  line-height: 64px;
  font-size: 14px;
  cursor: pointer;
  padding: 0 10px;
}
.layout-avator:hover{
  background: #e6f7ff;
}
.avator-image{
  display: inline-block;
  background: #ccc;
  color: #fff;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
  vertical-align: middle;
}
.avator-image img {
  display: block;
  width: 100%;
  height: 100%;
}
.avator-info{
  width: 80px;
}
.avator-info a{
  color: rgba(255,255,255,.7);
  display: block;
  height: 30px;
  line-height: 30px;
  text-align: center;
  transition: all .2s ease-in-out;
}
.avator-info a:hover{
  color: rgba(255,255,255,1);
}
</style>
