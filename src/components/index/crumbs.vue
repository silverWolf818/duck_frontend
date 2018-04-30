<template>
  <Breadcrumb class="layout-breadCrumb">
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

</style>
