<template>
    <div class="layout-form">
      <div class="tips">
        <h2>多选框</h2>
        <div>基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</div>
      </div>
      <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
          <Icon type="social-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
          <Icon type="social-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
          <Icon type="social-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
          <Icon type="social-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
      </CheckboxGroup>
      <p>{{ social }}</p>
      <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
      </CheckboxGroup>
      <p>{{ fruit }}</p>
      <div class="tip-title">使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</div>
      <Checkbox v-model="checked" :disabled="disabled">
        <span v-if="checked">Checked</span>
        <span v-else>Unchecked</span>
        -
        <span v-if="!disabled">Usable</span>
        <span v-else>Disabled</span>
      </Checkbox>
      <br>
      <Button type="primary" @click="checked = !checked">
        <span v-if="!checked">Checked</span>
        <span v-else>Unchecked</span>
      </Button>
      <Button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">Usable</span>
        <span v-else>Disabled</span>
      </Button>
      <div class="tip-title">与其它组件进行数据联动。</div>
      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
          :indeterminate="indeterminate"
          :value="checkAll"
          @click.prevent.native="handleCheckAll">全选</Checkbox>
      </div>
      <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
      </CheckboxGroup>
      <div class="tip-title">在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          social: ['facebook', 'github'],
          fruit: ['苹果'],
          checked: true,
          disabled: false,
          indeterminate: true,
          checkAll: false,
          checkAllGroup: ['香蕉', '西瓜']
        }
      },
      methods:{
        handleCheckAll () {
          if (this.indeterminate) {
            this.checkAll = false;
          } else {
            this.checkAll = !this.checkAll;
          }
          this.indeterminate = false;

          if (this.checkAll) {
            this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
          } else {
            this.checkAllGroup = [];
          }
        },
        checkAllGroupChange (data) {
          if (data.length === 3) {
            this.indeterminate = false;
            this.checkAll = true;
          } else if (data.length > 0) {
            this.indeterminate = true;
            this.checkAll = false;
          } else {
            this.indeterminate = false;
            this.checkAll = false;
          }
        }
      }
    }
</script>

<style scoped>
  .tip-title{
    margin-top: 10px;
  }
</style>
