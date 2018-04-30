<template>
  <div class="layout-form">
    <div class="tips">
      <h2>基础详情页</h2>
    </div>
    <Form ref="formValidate" :model="formValue" :label-width="80" style="margin-left: 200px">
      <FormItem label="用户名：">
        <p>{{ formValue.name }}</p>
      </FormItem>
      <FormItem label="邮箱：">
        <p>{{ formValue.email }}</p>
      </FormItem>
      <FormItem label="手机号：">
        <p>{{ formValue.tel }}</p>
      </FormItem>
      <FormItem label="订单号：">
        <p>{{ formValue.order }}</p>
      </FormItem>
      <FormItem label="下单时间：">
        <p>{{ formValue.time }}</p>
      </FormItem>
      <FormItem label="采购单位：">
        <p>{{ formValue.unit }}</p>
      </FormItem>
      <FormItem label="供应商：">
        <p>{{ formValue.supplier }}</p>
      </FormItem>
      <FormItem label="支付方式：">
        <p>{{ formValue.type }}</p>
      </FormItem>
      <FormItem label="送达时间：">
        <p>{{ formValue.send }}</p>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formValue: {
          name: '呵呵哒',
          email:'363420113@qq.com',
          tel:'13164621126',
          order:'2018030300001386',
          time:'2018-03-03 16:40:07',
          unit:'国电物资集团有限公司上海分公司',
          supplier:'京东',
          type:'预付款',
          send:'工作日'
        }
      }
    }
  }
</script>

<style scoped>

</style>
