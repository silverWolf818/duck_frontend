<template>
    <div>
      <p>{{ text }}</p>
      <div>{{ visible }}</div>
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        text:{
          type: String,
          default: 'text'
        }
    },
  data () {
    return {
      visible: false
    };
  },
}
</script>

<style scoped>

</style>
