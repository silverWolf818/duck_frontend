<template>
  <div class="layout-form">
    <div class="tips">
      <h2>日期选择器</h2>
      <div>选择或输入日期，支持年、月、日期等类型，支持选择范围。</div>
    </div>
    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
    <br>
    <br>
    <DatePicker type="daterange" placement="bottom-start" placeholder="Select date" style="width: 200px"></DatePicker>
    <div class="tip-title">设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。</div>
    <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>
    <br>
    <br>
    <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>
    <div class="tip-title">设置属性 type 为 datetime 或 datetimerange 可以选择时间。 设置 format 并且忽略秒，可以只设置小时和分钟维度。</div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.tip-title{
  margin-top: 10px;
}
</style>
