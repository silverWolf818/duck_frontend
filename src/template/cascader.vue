<template>
    <div class="layout-form">
      <div class="tips">
        <h2>级联选择</h2>
        <div>从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。 相比 Select 组件，可以一次性完成选择，体验更好。</div>
      </div>
      <Cascader :data="data" v-model="value1" style="width: 200px"></Cascader>
      <div class="tip-title">级联选择对数据有较严格要求，请参照示例的格式使用data，每项数据至少包含 value、label 两项，子集为 children，以此类推。</div>
      <Cascader :data="data" trigger="hover" style="width: 200px"></Cascader>
      <div class="tip-title">设置属性 trigger 为 hover，当鼠标悬停时就会展开子集。</div>
      <Cascader :data="data" change-on-select style="width: 200px"></Cascader>
      <div class="tip-title">设置属性 change-on-select 点任何一级都可以选择。</div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          value1: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
          data: [{
            value: 'beijing',
            label: '北京',
            children: [
              {
                value: 'gugong',
                label: '故宫'
              },
              {
                value: 'tiantan',
                label: '天坛'
              },
              {
                value: 'wangfujing',
                label: '王府井'
              }
            ]
          }, {
            value: 'jiangsu',
            label: '江苏',
            children: [
              {
                value: 'nanjing',
                label: '南京',
                children: [
                  {
                    value: 'fuzimiao',
                    label: '夫子庙',
                  }
                ]
              },
              {
                value: 'suzhou',
                label: '苏州',
                children: [
                  {
                    value: 'zhuozhengyuan',
                    label: '拙政园',
                  },
                  {
                    value: 'shizilin',
                    label: '狮子林',
                  }
                ]
              }
            ],
          }]
        }
      }
    }
</script>

<style scoped>
.tip-title{
  margin-top: 10px;
}
</style>
