<template>
  <Card>
    <p slot="title" class="card-title">
      <Icon type="ios-pricetags-outline"></Icon>
      动态
    </p>
    <div>
      <div class="list u-flex">
        <div class="s-avator"><img src="" alt=""></div>
        <div class="s-msg">
          <p>呵呵达 在 <a href="javascript:">高逼格设计天团</a> 新建项目 <a href="javascript:">六月迭代</a></p>
          <i>几秒前</i>
        </div>
      </div>
      <div class="list u-flex">
        <div class="s-avator"><img src="" alt=""></div>
        <div class="s-msg">
          <p>呵呵达 在 <a href="javascript:">高逼格设计天团</a> 新建项目 <a href="javascript:">六月迭代</a></p>
          <i>几秒前</i>
        </div>
      </div>
      <div class="list u-flex">
        <div class="s-avator"><img src="" alt=""></div>
        <div class="s-msg">
          <p>呵呵达 在 <a href="javascript:">高逼格设计天团</a> 新建项目 <a href="javascript:">六月迭代</a></p>
          <i>几秒前</i>
        </div>
      </div>
      <div class="list u-flex">
        <div class="s-avator"><img src="" alt=""></div>
        <div class="s-msg">
          <p>呵呵达 在 <a href="javascript:">高逼格设计天团</a> 新建项目 <a href="javascript:">六月迭代</a></p>
          <i>几秒前</i>
        </div>
      </div>
      <div class="list u-flex">
        <div class="s-avator"><img src="" alt=""></div>
        <div class="s-msg">
          <p>呵呵达 在 <a href="javascript:">高逼格设计天团</a> 新建项目 <a href="javascript:">六月迭代</a></p>
          <i>几秒前</i>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
.list:not(:last-child){
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8e8;
}
.list:not(:first-child){
  padding-top: 16px;
}
.s-avator{
  flex: 0 1 32px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  margin-right: 16px;
  background: #eee;
}
.s-msg{
  flex: 1 1 auto;
  i{
    font-style: normal;
    display: block;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
