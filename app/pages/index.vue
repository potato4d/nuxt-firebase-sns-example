<template>
  <div class="container">
    <div class="profile-area">
      <AppSidebar />
    </div>
    <div class="talk-area">
      <AppTalkLoader v-if="$store.getters['isFetching']" />
      <AppTalk v-for="post in posts" :key="post.id" :post="post" />
      <AppForm />
    </div>
  </div>
</template>

<script>
import auth from '~/plugins/auth'
import dayjs from 'dayjs'
import AppSidebar from '~/components/AppSidebar.vue'
import AppTalk from '~/components/AppTalk.vue'
import AppTalkLoader from '~/components/AppTalkLoader.vue'
import AppForm from '~/components/AppForm.vue'

export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://nuxt-firebase-sns-example.potato4d.me/'
        }
      ]
    }
  },
  data() {
    return {
      isVisible: false,
      canLoad: false
    }
  },
  components: {
    AppSidebar,
    AppTalk,
    AppForm,
    AppTalkLoader
    // TheTimeLine,
    // TheUserInfo
  },
  filters: {
    timestamp(val) {
      return dayjs.unix(val - 3000000000).format('MM/DD/YYYY hh:mm:ss')
    }
  },
  mounted() {
    const $ = el => document.querySelector(el)
    $('html').scrollTo({ top: 9999999 })
    this.isVisible = true
    this.$firestore.collection('posts').onSnapshot(snapshot => {
      if (snapshot.docChanges().length !== 1) return
      snapshot.docChanges().forEach(change => {
        const post = change.doc.data()
        this.$store.commit('addPost', { post })
      })
    })
    document.addEventListener('scroll', () => {
      if (32 > $('html').scrollTop) {
        if (!this.canLoad) {
          return
        }
        this.canLoad = false
        this.$store.dispatch('fetchPosts').then(post => {
          if (!post) {
            return
          }
          requestAnimationFrame(() => {
            const el = $(`[data-id="${post.id}"]`)
            const rect = el.getBoundingClientRect()
            $('html').scrollTo({
              top: rect.top + window.pageYOffset + rect.height - 32
            })
          })
        })
      } else {
        this.canLoad = true
      }
    })
  },
  computed: {
    posts() {
      return this.$store.getters['posts']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  /* flex-direction: column; */
}

.profile-area {
  width: 300px;
  position: sticky;
  top: 0;
}

.talk-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: solid 1px rgba(255, 255, 255, 0.1);
  padding: 16px 16px 0;
}
</style>
