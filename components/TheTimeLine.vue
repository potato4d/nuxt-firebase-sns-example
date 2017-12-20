<template lang="html">
  <div class="timeline">
    <TheTimeLinePostArea v-if="user" />
    <ul class="posts">
      <transition-group name="post">
        <Post class="post" :post="post" :key="post['.key']" v-for="post in posts" v-if="post.user" />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import Post from '~/components/Post.vue'
import { mapGetters } from 'vuex'
import TheTimeLinePostArea from '~/components/TheTimeLinePostArea.vue'

export default {
  components: {
    Post,
    TheTimeLinePostArea
  },
  computed: {
    ...mapGetters(['user', 'posts'])
  }
}
</script>

<style scoped>
.timeline {
  height: calc(100vh - 76px);
}

.timeline .posts{
  height: calc(100% - 36px);
  overflow-y: auto;
}

.post-enter-active {
  animation: slideIn 0.3s linear;
}

@keyframes slideIn {
  0% {opacity: 0.0}
  100% {opacity: 1.0}
}
</style>
