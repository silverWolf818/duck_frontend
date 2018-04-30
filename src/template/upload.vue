<template>
    <div class="layout-form">
      <div class="tips">
        <h2>上传</h2>
        <div>文件选择上传和拖拽上传控件。</div>
      </div>
      <Upload multiple :data="upload" action="http://47.94.134.239:8080/rest/upload/uploadfiletooss" style="width: 300px">
        <Button type="ghost" icon="ios-cloud-upload-outline">附件上传</Button>
      </Upload>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            upload:{
              type:'jpg',
              init:'test'
            },
          }
        }
    }
</script>

<style scoped>

</style>
