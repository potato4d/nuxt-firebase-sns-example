<template>
  <div class="container">
    <div class="columns" v-if="isLoaded">
      <TheUserInfo class="column is-narrow is-3" />
      <TheTimeLine class="column is-narrow is-9" />
    </div>
    <div class="loading-wrapper" v-else>
      <div class="loading"></div>
    </div>
  </div>
</template>

<script>
import auth from '~/plugins/auth'
import TheTimeLine from '~/components/TheTimeLine.vue'
import TheUserInfo from '~/components/TheUserInfo.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isLoaded: false
    }
  },
  components: {
    TheTimeLine,
    TheUserInfo
  },
  async mounted () {
    if (process.browser) {
      let user
      if (!this.user) user = await auth()
      await Promise.all([
        this.user ? Promise.resolve() : this.$store.dispatch('SET_CREDENTIAL', { user: user || null }),
        this.posts.length ? Promise.resolve() : this.$store.dispatch('INIT_POSTS'),
        this.users.length ? Promise.resolve() : this.$store.dispatch('INIT_USERS')
      ])
      this.isLoaded = true
    }
  },
  computed: {
    ...mapGetters(['user', 'users', 'posts'])
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

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
    filter: drop-shadow(0 0 300px rgba(26, 209, 253, 1.0));
  }

  .loading::before{
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
    content: "";
    position: absolute;
    animation: anim2 1.0s ease infinite;
  }


  @keyframes anim2 {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(360deg); }
    100% { transform: rotate(720deg); }
  }
</style>
