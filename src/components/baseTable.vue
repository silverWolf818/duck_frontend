<template>
 <div class="baseTable" style="margin-top: 20px;">
   <Table :loading="loading" border v-bind="$props"
          :data="props_data"
          @on-selection-change="selectionChange"></Table>
   <div style="padding:15px;overflow: hidden;background: #fff">
     <div style="float: right;">
       <Page :total="props_total"
             :current="props_pageNo"
             :page-size-opts="pageSizeOpt"
             size="small" show-elevator show-sizer
             @on-change="changedNo"
             @on-page-size-change="changedSize"></Page>
     </div>
   </div>
 </div>
</template>

<script>
    import { queryApi } from "@/service/api"
    export default {
        props:{
          height: {
            type: [Number, String],
            default: 300
          },
          mock:{
            type: Boolean,
            default: false
          },
          url: {
            type: String
          },
          pageNo: {
            type: Number,
            default: 1
          },
          pageSize: {
            type: Number,
            default: 10,
          },
          columns: {
            type: Array,
            default() {
              return [];
            }
          },
          pageSizeOpt:{
            type: Array,
            default() {
              return [10,20,30];
            }
          },
          data: {
            type: Array,
            default() {
              return [];
            }
          },
          queryParam: {
            type: Function
          }
        },
        data() {
          return {
            loading:true,
            props_data:this.data,
            props_total:0,
            props_pageNo:this.pageNo,
            props_query:{
              pageNo: this.pageNo,
              pageSize: this.pageSize
            }
          }
        },
        created() {
          this.query();
        },
        methods: {
          query(arg){
            let param = _.assign(this.props_query,arg || {});
            this.queryParam && _.assign(param,this.queryParam(param));
            queryApi(this.url,param,this.mock).then((res) => {
              this.loading = false;
              this.props_data = res.rows;
              this.props_pageNo = res.pageNo;
              this.props_total = res.recordsTotal;
            });
          },
          changedNo(page){
            this.query({
              pageNo:page
            });
          },
          changedSize(size){
            this.query({
              pageNo:1,
              pageSize:size
            });
          },
          selectionChange(data){
            this.$emit('selectionChange',data);
          }
        }
    }
</script>

<style scoped>

</style>
