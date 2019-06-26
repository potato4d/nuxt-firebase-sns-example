<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div
      class="form-content"
      :style="{
        opacity: $store.getters['user'] ? '1.0' : '0.5',
        pointerEvents: $store.getters['user'] ? '' : 'none'
      }"
    >
      <textarea maxlength="140" v-model="body"></textarea>
      <button>
        Send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      body: ''
    }
  },
  methods: {
    async handleSubmit() {
      await this.$store.dispatch('sendPost', { body: this.body })
      this.body = ''
      setTimeout(() => {
        document.querySelector('html').scrollTo({
          top: 99999999
        })
      }, 200)
    }
  }
}
</script>

<style scoped>
.form {
  padding: 16px;
  display: flex;
  position: sticky;
  bottom: 0;
  background: #15202b;
}

.form-content {
  flex: 1;
  display: flex;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  background: rgba(240, 240, 255, 0.1);
}

textarea {
  flex: 1;
  background: transparent;
  color: #fff;
  border: 0;
  appearance: none;
  display: block;
  height: 100%;
  padding: 12px;
  font-size: 14px;
  resize: none;
}

button {
  width: 100px;
  appearance: none;
  -webkit-appearance: none;
  background: #468893;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>
