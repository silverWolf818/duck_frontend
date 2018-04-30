<template>
  <div>{{ getCount }}</div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex'
    export default {
      computed: {
        ...mapGetters([
          'getCount'
        ])
      },
      methods: {
        ...mapActions([
          'increment'
        ])
      },
      created(){
        console.log(conf.api());
        this.increment({
          x:1
        });
      }
    }
</script>

<style scoped>

</style>
