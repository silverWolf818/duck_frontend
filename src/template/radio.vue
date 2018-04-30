<template>
    <div class="layout-form">
      <div class="tips">
        <h2>单选框</h2>
        <div>基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</div>
      </div>
      <RadioGroup v-model="phone">
        <Radio label="apple">
          <Icon type="social-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="social-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="social-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup>
      <p>{{ phone }}</p>
      <br>
      <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
      </RadioGroup>
      <p>{{ animal }}</p>
      <div class="tip-title">使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。</div>
      <RadioGroup v-model="disabledGroup">
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
      </RadioGroup>
      <div class="tip-title">通过设置disabled属性来禁用单选框。</div>
      <RadioGroup v-model="vertical" vertical>
        <Radio label="apple">
          <Icon type="social-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="social-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="social-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup>
      <div class="tip-title">设置属性 vertical 可以垂直显示，按钮样式下无效。</div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          phone: 'apple',
          animal: '爪哇犀牛',
          disabledSingle: true,
          disabledGroup: '爪哇犀牛',
          vertical: 'apple',
        }
      }
    }
</script>

<style scoped>
.tip-title{
  margin-top: 10px;
}
</style>
