<template>
    <div>
      <div>tewewewst</div>
    </div>
</template>

<script>
  import { queryApi,queryTest } from '../../service/api'
export default {
  mounted() {
    this.$test.show({
      render: (h) => {
        return h('div', [
          h('Icon', {
            'class': 'demo-spin-icon-load',
            props: {
              type: 'load-c',
              size: 18
            }
          }),
          h('div', 'Loading')
        ])
      }
    });
    let obj = {
      name:'z',
      ee:'z'
    }
    queryTest({ data:obj });
    queryApi('list',{},true);
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
