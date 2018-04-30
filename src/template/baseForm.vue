<template>
  <div class="layout-form">
    <Form class="base-form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" style="width: 600px">
      <FormItem label="用户名" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入用户名"/>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail" placeholder="请输入邮箱"/>
      </FormItem>
      <FormItem label="下拉框" prop="city">
        <Select v-model="formValidate.city" placeholder="请选择">
          <Option value="beijing">北京</Option>
          <Option value="shanghai">上海</Option>
          <Option value="shenzhen">深圳</Option>
        </Select>
      </FormItem>
      <FormItem label="日期">
        <Row>
          <Col span="12">
          <FormItem prop="date">
            <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"/>
          </FormItem>
          </Col>
          <Col span="12">
          <FormItem prop="time">
            <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"/>
          </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="爱好" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="吃"></Checkbox>
          <Checkbox label="睡"></Checkbox>
          <Checkbox label="跑步"></Checkbox>
          <Checkbox label="电影"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="描述" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" size="large" @click="handleSubmit('formValidate')">提交</Button>
        <Button type="ghost" size="large" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '用户名不能为空！', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空！', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱！', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择城市！', trigger: 'change' }
          ],
          gender: [
            { required: true, message: '请选择性别！', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: '请选择至少一个爱好！', trigger: 'change' },
            { type: 'array', max: 2, message: '最多只能选择两个！', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: '请选择日期！', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'date', message: '请选择时间！', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入描述！', trigger: 'blur' },
            { type: 'string', min: 20, message: '至少输入20字符！', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('成功!');
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
