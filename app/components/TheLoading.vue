<template>
  <div class="loading-wrapper"><div class="loading"></div></div>
</template>

<script>
export default {}
</script>

<style scoped>
.loading-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.loading {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
  z-index: 100;
  /* transform: rotateX(60deg); */
  filter: drop-shadow(0 0 300px rgba(26, 209, 253, 1));
}

.loading::before {
  display: block;
  width: 140px;
  height: 140px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  border: solid 3px #00d1b2;
  border-right-color: transparent;
  border-left-color: transparent;
  border-radius: 50%;
  overflow: hidden;
  content: '';
  position: absolute;
  animation: anim2 1s ease infinite;
}

@keyframes anim2 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
  }
}
</style>
