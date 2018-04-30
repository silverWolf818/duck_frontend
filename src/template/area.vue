<template>
    <div class="layout-form">
      <div class="tips">
        <h2>地区选择</h2>
      </div>
      <al-selector v-model="res_s"/>
      <br>
      <al-cascader data-type="code" v-model="res1" style="width: 300px"/>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          res_s: [],
          res1:["110000","110100","110106","110106002000"]
        }
      }
    }
</script>

<style scoped>

</style>
