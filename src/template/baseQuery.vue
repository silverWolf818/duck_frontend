<template>
  <div class="list">
      <Form ref="form" inline :model="query" class="layout-queryPanel">
        <Row :gutter="8">
          <Col span="8">
          <FormItem label="名称" prop="name">
            <Input v-model="query.name" placeholder="请输入" />
          </FormItem>
          </Col>
          <Col span="8">
          <FormItem label="地址" prop="address">
            <Input v-model="query.address" placeholder="请输入" />
          </FormItem>
          </Col>
          <Col span="8">
          <FormItem label="年龄" prop="age">
            <Input v-model="query.age" placeholder="请输入" />
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="8">
          <Col span="8">
          <FormItem label="状态" prop="status">
            <Select v-model="query.status">
              <Option v-for="item in dic.status" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="8" v-show="visible">
          <Col span="8">
          <FormItem label="开始时间" prop="timeStart">
            <DatePicker v-model="query.timeStart" format="yyyy-MM-dd" type="date" placeholder="开始时间"></DatePicker>
          </FormItem>
          </Col>
          <Col span="8">
          <FormItem label="结束时间" prop="timeEnd">
            <DatePicker v-model="query.timeEnd" format="yyyy-MM-dd" type="date" placeholder="结束时间"></DatePicker>
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="8" class="query-btns">
          <Col span="8">
          <Button type="primary" @click="search"><Icon type="ios-search-strong"></Icon> 查询</Button>
          <Button @click="reset"><Icon type="refresh"></Icon> 重置</Button>
          <Button type="text" @click="toggle">展开 <Icon :type="isToggle"></Icon></Button>
          </Col>
        </Row>
      </Form>
      <Row :gutter="8" class="op-btns">
        <Col span="8" offset="16">
        <Button type="primary"><Icon type="plus"></Icon> 新增</Button>
        <Button type="primary" @click="modify"><Icon type="edit"></Icon> 修改</Button>
        <Button type="primary"><Icon type="trash-a"></Icon> 删除</Button>
        </Col>
      </Row>
      <BaseTable @selectionChange="selectionChange" v-bind="table" ref="basetable"></BaseTable>
  </div>
</template>

<script>
  import BaseTable from '@/components/baseTable.vue'
  export default {
    name: "list",
    components: {
      BaseTable
    },
    created() {

    },
    data() {
      return {
        selection:[],
        visible:false,
        dic:{
          status:[
            {
              label:"全部",
              value:""
            },
            {
              label:"草稿",
              value:0
            },
            {
              label:"驳回",
              value:1
            },
            {
              label:"审核中",
              value:2
            },
            {
              label:"暂停",
              value:3
            },
            {
              label:"启用",
              value:4
            },
            {
              label:"冻结",
              value:5
            }
          ]
        },
        query:{
          name:'',
          address:'',
          age:'',
          status:'',
          timeStart:'',
          timeEnd:''
        },
        table:{
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
          //额外参数传递
          queryParam(param) {
            return _.assign({
              isEffect:0
            }, param);
          }
        }
      }
    },
    computed: {
      isToggle(){
        return this.visible?'arrow-up-b':'arrow-down-b';
      }
    },
    methods: {
      search(){
        let data = this.query;
        data.pageNo = 1;
        data.timeStart && (data.timeStart = moment(data.timeStart).format("YYYY-MM-DD"));
        data.timeEnd && (data.timeEnd = moment(data.timeEnd).format("YYYY-MM-DD"));
        this.$refs['basetable'].query(data);
      },
      reset(){
        this.$refs['form'].resetFields();
        this.search();
      },
      toggle(){
        this.visible = !this.visible;
      },
      modify(){
        console.log(this.selection);
      },
      selectionChange(data){
        this.selection = data;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
