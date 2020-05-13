<template>
  <div id="app">
    <nuxt />
    <TheForkCorners />
  </div>
</template>

<script>
import TheForkCorners from '~/components/TheForkCorners.vue'
export default {
  components: {
    TheForkCorners
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  background: #36393f;
  padding: 32px;
}
</style>
