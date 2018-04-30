<template>
    <div class="layout-avator">
      <span class="avator-image"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525355644&di=af848d73ee0590eff35767914acc3db5&imgtype=jpg&er=1&src=http%3A%2F%2Fupload.chinapet.com%2Fforum%2F201412%2F20%2F234122jgrvuker37ekxtuu.jpg" alt=""></span><span>周大侠</span>
    </div>
</template>

<script>
    export default {

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
</style>
