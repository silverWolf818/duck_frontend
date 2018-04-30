<template>
    <div class="layout">
      <Layout>
        <Content :style="{ width:'800px',margin:'20px auto' }">
          <Breadcrumb>
            <BreadcrumbItem :style="{ fontSize:'20px' }">购物车</BreadcrumbItem>
          </Breadcrumb>
          <table style="width: 800px;border: 1px solid #ddd; margin-top: 20px;background: #fff;border-spacing: 0;border-collapse: collapse;">
            <tr>
              <th><input type="checkbox" v-model="checkAll"> 全选</th>
              <th>商品</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
            <tr v-for="(product,index) in products">
              <td style="text-align: center"><input type="checkbox" v-model="product.isSelected"></td>
              <td>
                <img style="border: 1px solid #ddd;padding: 4px;vertical-align: middle;width: 90px; height: 90px;" :src="product.productCover" :title="product.productName">
                {{ product.productInfo }}
              </td>
              <td style="text-align: center">
                {{ product.productPrice | toFixed(2) }}
              </td>
              <td style="text-align: center">
                <Input v-model="product.productCount" number style="width: 100px;"></Input>
              </td>
              <td style="width: 100px;text-align: center">
                {{ product.productCount*product.productPrice | toFixed(2) }}
              </td>
              <td style="text-align: center"><Button type="error" @click="remove(product)">删除</Button></td>
            </tr>
            <tr>
              <td colspan="6" style="font-size: 14px;text-align: right">总价格: {{ sum | toFixed(2) }}</td>
            </tr>
          </table>
        </Content>
      </Layout>
    </div>
</template>

<script>
    export default {
        name: "cart",
        filters:{
          toFixed(data,param1){ //this指向Window
            return '¥ ' + data.toFixed(param1)
          }
        },
        data(){
          return {
            products:[]
          }
        },
        created(){
          this.getData();
        },
        computed:{
          checkAll:{
            get(){
              return this.products.every(item => item.isSelected);
            },
            set(val){
              this.products.forEach(item => item.isSelected = val);
            }
          },
          sum(){
            return this.products.reduce((prev,next) => {
              if(next.isSelected){
                return prev + next.productPrice * next.productCount;
              }else{
                return prev;
              }
            },0);
          }

        },
        methods:{
          getData(){
            axios.post('carts').then(res => {
              this.products = res;
            },err => {
              console.log(err);
            })
          },
          remove(p){
            this.products = this.products.filter(item => item !== p);
          }
        }
    }
</script>

<style scoped>
table th,
table td{
  border: 1px solid #ddd;
  padding: 8px;
}
.ivu-input{
  text-align: center;
}
</style>
