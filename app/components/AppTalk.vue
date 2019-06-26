<template>
  <div class="talk" :data-id="post.id">
    <img
      v-if="post.user"
      width="40"
      style="border-radius: 50%;"
      :src="post.user.icon"
    />
    <div class="talk-content">
      <div class="talk-info">
        <p v-if="post.user">{{ post.user.name }}</p>
        <span>{{ post.createdAt | timestamp }}</span>
      </div>
      <div class="talk-body">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    post: Object
  },
  filters: {
    timestamp(val) {
      return dayjs.unix(val - 3000000000).format('MM/DD/YYYY hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.talk {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  line-height: 2;
  color: #e5e5e5;
}

.talk .talk-content {
  flex: 1;
  padding-left: 16px;
}

.talk .talk-info {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1;
}

.talk-info span {
  opacity: 0.6;
  font-size: 12px;
  display: inline-block;
  margin-left: 8px;
  margin-top: 2px;
}

.talk-content .talk-body {
  padding-top: 4px;
}
</style>
