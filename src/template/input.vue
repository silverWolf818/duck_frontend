<template>
  <div class="layout-form">
    <div class="tips">
      <h2>输入框</h2>
      <div>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</div>
    </div>
    <Input v-model="value" placeholder="请输入" class="input"/>
    <div class="tip-title">基本用法，可以使用 v-model 实现数据的双向绑定。 可以直接设置 style 来改变输入框的宽度，默认 100%。</div>
    <Input v-model="value1" size="large" placeholder="large size" class="input"/>
    <br>
    <Input v-model="value2" placeholder="default size" class="input"/>
    <br>
    <Input v-model="value3" size="small" placeholder="small size" class="input"/>
    <div class="tip-title">通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。</div>
    <Input v-model="value4" placeholder="请输入" clearable class="input"/>
    <div class="tip-title">开启属性 clearable 可显示清空按钮。</div>
    <Input v-model="value5" placeholder="请输入" icon="edit" class="input" @on-click="test"/>
    <div class="tip-title">通过 icon 属性可以在输入框右边加一个图标。 点击图标，会触发 on-click 事件。</div>
    <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." class="input"/>
    <div class="tip-title">通过设置属性 type 为 textarea 来使用文本域，用于多行输入。通过设置属性 rows 控制文本域默认显示的行数。</div>
    <Input v-model="value7" type="textarea" :autosize="true" class="input" placeholder="Enter something..."/>
    <br>
    <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" class="input" placeholder="Enter something..."/>
    <div class="tip-title">设置属性 autosize，文本域会自动适应高度的变化。autosize也可以设定为一个对象，指定最小行数和最大行数。</div>
    <Input v-model="value9" disabled placeholder="Enter something..." class="input"/>
    <div class="tip-title">通过添加disabled属性可设置为不可用状态。</div>
    <Input v-model="value11" class="input">
    <span slot="prepend">http://</span>
    <span slot="append">.com</span>
    </Input>
    <br>
    <Input v-model="value12" class="input">
    <Select v-model="select1" slot="prepend" style="width: 80px">
      <Option value="http">http://</Option>
      <Option value="https">https://</Option>
    </Select>
    <Select v-model="select2" slot="append" style="width: 70px">
      <Option value="com">.com</Option>
      <Option value="org">.org</Option>
      <Option value="io">.io</Option>
    </Select>
    </Input>
    <br>
    <Input v-model="value13" class="input">
    <Select v-model="select3" slot="prepend" style="width: 80px">
      <Option value="day">Day</Option>
      <Option value="month">Month</Option>
    </Select>
    <Button slot="append" icon="ios-search"></Button>
    </Input>
    <div class="tip-title">通过前置和后置的 slot 可以实现复合型的输入框。</div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          value: '',
          value1: '',
          value2: '',
          value3: '',
          value4:'',
          value5:'',
          value6:'',
          value7:'',
          value8:'',
          value9:'',
          value11:'',
          value12:'',
          value13:'',
          select1: 'http',
          select2: 'com',
          select3: 'day'
        }
      },
      methods:{
        test(){
          this.$Message.info('触发点击');
        }
      }
    }
</script>

<style scoped>
.input{
  width: 300px;
  margin-bottom: 15px;
}
</style>
