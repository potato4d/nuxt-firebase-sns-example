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
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: #36393f;
  padding: 32px;
}

.wrapper-loaded {
  /* background: #fafafa;
  padding-top: 0; */
}
</style>
