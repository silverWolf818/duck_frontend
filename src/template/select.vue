<template>
  <div class="layout-form">
    <div class="tips">
      <h2>选择器</h2>
      <div>使用模拟的增强下拉选择器来代替浏览器原生的选择器。 选择器支持单选、多选、搜索，以及键盘快捷操作。</div>
    </div>
    <Select v-model="model8" clearable style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <br>
    <div class="tip-title">基本用法。可以使用 v-model 双向绑定数据。 单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。</div>
    <br>
    <Select v-model="model10" multiple style="width:260px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <div class="tip-title">通过设置属性multiple可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。</div>
    <Select v-model="model11" filterable style="width:260px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <br>
    <br>
    <Select v-model="model12" filterable multiple style="width:260px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <div class="tip-title">通过设置属性filterable可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘Delete快捷删除最后一个已选项。</div>
    <Select
      style="width:260px"
      v-model="model13"
      filterable
      remote
      clearable
      :remote-method="remoteMethod1"
      :loading="loading1">
      <Option v-for="(option, index) in options1" :value="option.title" :key="index">{{option.title}}</Option>
    </Select>
    <br>
    <br>
    <Select
      style="width:260px"
      v-model="model14"
      filterable
      remote
      multiple
      clearable
      :remote-method="remoteMethod2"
      :loading="loading2">
      <Option v-for="(option, index) in options2" :value="option.title" :key="index">{{option.title}}</Option>
    </Select>
    <div class="tip-title">远程搜索需同时设置 filterable、remote、remote-method、loading 四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。</div>
  </div>
</template>

<script>
    import { queryApi } from "../service/api";
    export default {
      data () {
        return {
          cityList: [
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
            {
              value: 'Sydney',
              label: 'Sydney'
            },
            {
              value: 'Ottawa',
              label: 'Ottawa'
            },
            {
              value: 'Paris',
              label: 'Paris'
            },
            {
              value: 'Canberra',
              label: 'Canberra'
            }
          ],
          model8: '',
          model10: [],
          model11:'',
          model12:[],
          model13: '',
          model14: [],
          loading1: false,
          options1: [],
          loading2: false,
          options2: [],
          timer1:null,
          timer2:null
        }
      },
      methods:{
        remoteMethod1(query){
          if(query !== ''){
            this.loading1 = true;
            clearTimeout(this.timer1);
            this.timer1 = setTimeout(()=>{
              queryApi('QrySpecializedCompListBusiService',{
                data:{
                  compName:query
                }
              }).then((res) => {
                this.loading1 = false;
                this.options1 = res;
              });
            },500);
          }else{
            this.options1 = [];
          }
        },
        remoteMethod2(query){
          if(query !== ''){
            this.loading2 = true;
            clearTimeout(this.timer2);
            this.timer2 = setTimeout(()=>{
              queryApi('QrySpecializedCompListBusiService',{
                data:{
                  compName:query
                }
              }).then((res) => {
                this.loading2 = false;
                this.options2 = res;
              });
            },500);
          }else{
            this.options2 = [];
          }
        }
      }
    }
</script>

<style scoped>
.tip-title{
  margin-top: 10px;
}
</style>
