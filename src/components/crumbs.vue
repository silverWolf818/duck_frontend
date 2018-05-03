<template>
  <Breadcrumb class="layout-crumb">
    <BreadcrumbItem v-for="(item,index) in step" :key="index">{{ item.name }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  export default {
    props:{
      step:{
        type: [Array],
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.layout-crumb {
  position: absolute;
  top: 0;
  margin-left: 80px;
  font-size: 14px;
}
</style>
