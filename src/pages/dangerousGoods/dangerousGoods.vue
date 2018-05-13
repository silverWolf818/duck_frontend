<template>
  <div class="list">
    <Form ref="form" inline :model="query" class="layout-queryPanel">
      <Row :gutter="8">
        <Col span="8">
          <FormItem label="填报开始时间" prop="timeStart">
            <DatePicker v-model="query.timeStart" format="yyyy-MM-dd" type="date" placeholder="开始时间" />
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="填报结束时间" prop="timeEnd">
            <DatePicker v-model="query.timeEnd" format="yyyy-MM-dd" type="date" placeholder="结束时间"/>
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="填报单位" prop="unit">
            <Select v-model="query.unit">
              <Option v-for="item in dic.status" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row :gutter="8">
        <Col span="8">
          <FormItem label="货名" prop="goods">
            <Input v-model="query.goods" placeholder="请输入" />
          </FormItem>
        </Col>
      </Row>
      <Row :gutter="8" class="query-btns">
        <Col span="8">
          <Button type="primary" @click="search"><Icon type="ios-search-strong"></Icon> 查询</Button>
          <Button @click="reset"><Icon type="refresh"></Icon> 重置</Button>
        </Col>
      </Row>
    </Form>
    <Row>
       <div class="operate-btn mt10">
         <Button type="info" @click="add"><Icon type="plus"></Icon> 新增</Button>
         <Button type="info" @click="modify"><Icon type="edit"></Icon> 修改</Button>
         <Button type="info"><Icon type="trash-a"></Icon> 删除</Button>
         <Button type="error"><Icon type="upload" :size="14"></Icon> Excel导入(防港北港报表)</Button>
         <Button type="error"><Icon type="upload" :size="14"></Icon> Excel导入(防港安技部报表)</Button>
         <Button type="error"><Icon type="upload" :size="14"></Icon> Excel导入(硝酸铵报表)</Button>
         <Button type="error"><Icon type="upload" :size="14"></Icon> Excel导入(汇通报表)</Button>
         <Button type="error"><Icon type="upload" :size="14"></Icon> Excel导入(通用膜版)</Button>
         <Button type="success"><Icon type="android-download" :size="14"></Icon> 导出到Excel(集团模板)</Button>
         <Button type="success"><Icon type="android-download" :size="14"></Icon> 导出到Excel(通用模板)</Button>
       </div>
    </Row>
    <BaseTable @selectionChange="selectionChange" v-bind="table" ref="basetable"></BaseTable>
    <Modal
      class-name="vertical-center-modal"
      v-model="config.modal"
      :title="config.title"
      :width="650"
      @on-ok="ok">
      <Form>

      </Form>
    </Modal>
  </div>
</template>

<script>
  import BaseTable from '@/components/baseTable.vue'
  import ModelConfirm from '@/components/modelConfirm'
  export default {
    name: "list",
    components: {
      BaseTable,
      ModelConfirm
    },
    created() {

    },
    data() {
      return {
        config:{
          modal:false,
          title:'标题'
        },
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
        test:'test',
        query:{
          timeStart:'',
          timeEnd:'',
          unit:'',
          goods:''
        },
        table:{
          height:400,
          mock:true,
          url:'list',
          pageNo:1,
          pageSize:10,
          columns: [
            {
              type: 'selection',
              width:60,
              fixed: 'left'
            },{
              type: 'index',
              title:'序号',
              width:80,
              align:'center',
              fixed: 'left'
            },{
              title: '名称',
              key: 'name',
            },{
              title: '分组',
              align: 'center',
              children:[
                {
                  title: '地址',
                  key: 'address',
                },{
                  title: '年龄',
                  key: 'age',
                }
              ]
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

          }
        }
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
      add(){
        this.config = {
          modal:true,
          title:'添加危险货物信息'
        }
      },
      ok(){

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
