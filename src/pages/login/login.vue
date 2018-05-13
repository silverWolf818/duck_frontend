<template>
    <div class="layout-login">
      <div class="container">
        <div class="header"><p class="title">管理系统</p></div>
        <div class="main">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem prop="name">
              <Input type="text" v-model="formValidate.name" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formValidate.password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" size="large" @click="handleSubmit('formValidate')">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
</template>

<script>
  import { auth } from '@/service/api'
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          password: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '用户名不能为空！', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空！', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            auth(this.formValidate).then(res => {
              // this.$router.push({
              //   name:'home'
              // });
            });
          } else {
            this.$Message.error('失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style lang="scss">
.layout-login{
  .title{
    padding: 20px;
    text-align: center;
    font-size: 30px;
    color: rgba(0,0,0,.85);
    font-weight: 600;
  }
  .container{
    display: flex;
    background: #f0f2f5;
    background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    padding: 112px 0 24px;
  }
  .main{
    width: 368px;
    margin: 0 auto;
  }
  .ivu-input-wrapper{
    height: 40px;
  }
  .ivu-input{
    height: 40px;
  }
  .ivu-input-group-prepend{
    padding: 4px 10px;
  }
  .ivu-form-item-content{
    margin-left: 0 !important;
  }
  .ivu-btn{
    margin-top: 10px;
    width: 100%;
  }
}
</style>
