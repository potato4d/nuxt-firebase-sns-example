<template lang="html">
  <form class="field is-grouped" @submit.prevent="doPost">
    <p class="control is-expanded">
      <input class="input" type="text" placeholder="What's happening?" v-model="body">
    </p>
    <p class="control">
      <button class="button is-primary">
        Post
      </button>
    </p>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      body: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async doPost () {
      await this.$store.dispatch('ADD_POST', {email: this.user.email, body: this.body})
      this.body = ''
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 16px;
}
</style>
