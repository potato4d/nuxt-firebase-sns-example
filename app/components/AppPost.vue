<template lang="html">
  <li class="media" v-if="post.user">
    <figure class="media-left">
      <p class="image is-64x64"><img :src="post.user.icon" /></p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ post.user.name }}</strong> <br />
          <span class="body" v-html="formattedPost" />
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left"></div>
        <div class="level-right">
          <a class="level-item">
            <a target="_blank" :href="`/posts/${post.id}`" class="icon is-small"
              ><i class="fa fa-eye"></i
            ></a>
          </a>
        </div>
      </nav>
    </div>
  </li>
</template>

<script>
import h from 'htmlspecialchars'
import { link } from 'autolinker'

export default {
  props: {
    post: Object
  },
  computed: {
    formattedPost() {
      return link(h(this.post.body))
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.body {
  display: inline-block;
  margin-top: 6px;
}
</style>
