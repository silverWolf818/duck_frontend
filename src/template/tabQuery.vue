<template>
  <div class="tabList">
      <Tabs :animated="false" v-model="activeName" class="layout-tabQuery">
        <TabPane label="选项卡一" name="effect">
          <Form ref="form_effect" inline :model="query_effect" class="layout-queryPanel">
            <Row :gutter="8">
              <Col span="8">
              <FormItem label="平台协议编号1" prop="name">
                <Input v-model="query_effect.name" placeholder="请输入"/>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="企业协议编号1" prop="address">
                <Input v-model="query_effect.address" placeholder="请输入"/>
              </FormItem>
              </Col>
            </Row>
            <Row :gutter="8" class="query-btns">
              <Col span="8">
              <Button type="primary" @click="search"><Icon type="ios-search-strong"></Icon> 搜索</Button>
              <Button @click="reset"><Icon type="refresh"></Icon> 重置</Button>
              </Col>
            </Row>
          </Form>
        </TabPane>
        <TabPane label="选项卡二" name="abate">
          <Form ref="form_abate" inline :model="query_abate" class="layout-queryPanel">
            <Row :gutter="8">
              <Col span="8">
              <FormItem label="平台协议编号2" prop="name">
                <Input v-model="query_abate.name" placeholder="请输入"/>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="企业协议编号2" prop="address">
                <Input v-model="query_abate.address" placeholder="请输入"/>
              </FormItem>
              </Col>
            </Row>
            <Row :gutter="8" class="query-btns">
              <Col span="8">
              <Button type="primary" @click="search"><Icon type="ios-search-strong"></Icon> 搜索</Button>
              <Button @click="reset"><Icon type="refresh"></Icon> 重置</Button>
              </Col>
            </Row>
          </Form>
        </TabPane>
      </Tabs>
      <BaseTable v-if="activeName === 'effect'" key="1" v-bind="table.effect" ref="table_effect"></BaseTable>
      <BaseTable v-if="activeName === 'abate'" key="2" v-bind="table.abate" ref="table_abate"></BaseTable>
  </div>
</template>

<script>
  import BaseTable from '@/components/baseTable.vue'
  export default {
    components: {
      BaseTable
    },
    data() {
      return {
        activeName:'effect',
        query_effect:{
          name:'',
          address:'',
          age:'',
          status:'',
          timeStart:'',
          timeEnd:''
        },
        query_abate:{
          name:'',
          address:'',
          age:'',
          status:'',
          timeStart:'',
          timeEnd:''
        },
        table:{
          effect:{
            mock:true,
            url:'list',
            pageNo:1,
            pageSize:10,
            columns: [
              {
                type: 'selection',
                width:60,
              },{
                type: 'index',
                title:'序号',
                width:80,
                align:'center'
              },{
                title: '名称',
                key: 'name',
              },{
                title: '地址',
                key: 'address',
              },{
                title: '年龄',
                key: 'age',
              },{
                title: '职业',
                key: 'occupation'
              },{
                title: '邮箱',
                key: 'email',
              },{
                title: '收入',
                key: 'income',
              },{
                title: '类型',
                key: 'type',
              },
              {
                title: '时间',
                key: 'date',
                render:(h,{row,column,index}) => {
                  return h('div', moment(row.signTime).format("YYYY-MM-DD"));
                }
              }
            ],
            queryParam(param) {
              return _.assign({
                isEffect:0
              }, param);
            }
          },
          abate:{
            mock:true,
            url:'list',
            pageNo:1,
            pageSize:10,
            columns: [
              {
                type: 'selection',
                width:60,
              },{
                type: 'index',
                title:'序号',
                width:80,
                align:'center'
              },{
                title: '名称',
                key: 'name',
              },{
                title: '地址',
                key: 'address',
              },{
                title: '年龄',
                key: 'age',
              },{
                title: '职业',
                key: 'occupation'
              },{
                title: '邮箱',
                key: 'email',
              },{
                title: '收入',
                key: 'income',
              },{
                title: '类型',
                key: 'type',
              },
              {
                title: '时间',
                key: 'date',
                render:(h,{row,column,index}) => {
                  return h('div', moment(row.signTime).format("YYYY-MM-DD"));
                }
              }
            ],
            queryParam(param) {
              return _.assign({
                isEffect:1
              }, param);
            }
          }
        }
      }
    },
    watch:{
      activeName(newVal,oldVal){
        this[`query_${oldVal}`] = {}
      }
    },
    methods:{
      search() {
        let data = this[`query_${this.activeName}`];
        data.pageNo = 1;
        this.$refs[`table_${this.activeName}`].query(data);
      },
      reset() {
        console.log(this.activeName);
        this.$refs[`form_${this.activeName}`].resetFields();
        this.search();
      }
    }
  }
</script>

<style scoped>

</style>
