<template>
  <div class="layout-form">
    <Form class="base-form" :model="form" :label-width="80" style="width: 600px">
      <FormItem label="用户名" prop="a">
        <Input v-model="form.purchaseAccount" placeholder="请输入用户名"/>
      </FormItem>
      <FormItem label="邮箱" prop="b">
        <Input v-model="form.planName" placeholder="请输入邮箱"/>
      </FormItem>
      <FormItem>
        <Button type="primary" size="large" @click="handleSubmit">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  created() {
    this.init('wz');
  },
  computed: {
    ...mapGetters([
      'form'
    ])
  },
  methods: {
    ...mapActions([
      'setForm',
      'init'
    ]),
    handleSubmit(){
      console.log(this.form);
    }
  },
  watch: {
    form: {
      handler (value, oldValue) {
        this.setForm(value);
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
