<template lang="html">
  <div class="userinfo">
    <div class="media" v-if="user">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="user.photoURL">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{user.displayName}}</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="media" v-else>
      <a class="button is-primary" @click="callAuth">Signin with Google</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['callAuth'])
  }
}
</script>

<style lang="css">
</style>
