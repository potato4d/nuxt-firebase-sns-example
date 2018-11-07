<template lang="html">
  <div class="userinfo">
    <template v-if="user">
      <div class="mcard media media-user">
        <div class="media-content">
          <div class="content">
            <figure class="has-text-centered">
              <div class="image is-64x64" style="margin: 0 auto;">
                <img :src="user.photoURL" />
              </div>
            </figure>
            <p class="has-text-centered">
              <strong>{{ user.displayName }}</strong>
            </p>
          </div>
        </div>
      </div>
    </template>
    <div class="mcard media media-user" v-else>
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

<style scoped>
.userinfo .mcard {
  background: #fff;
  border: solid 1px #e6e6e6;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0px auto;
  padding: 16px 0;
}

.userinfo .media-user {
  width: 280px;
  height: 240px;
}

.userinfo {
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

@media (min-width: 768px) {
  .userinfo .media-user {
    position: fixed;
    top: 32px;
    padding-top: 0;
  }
}
</style>
