import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import cloneDeep from 'lodash.clonedeep'
const firestore = firebase.firestore()

if (process.browser) {
  const settings = { timestampsInSnapshots: true }
  firestore.settings(settings)
}

const provider = new firebase.auth.GoogleAuthProvider()

export const state = () => ({
  user: null,
  post: null,
  users: [],
  posts: [],
  isLoaded: false
})

export const getters = {
  posts: state => {
    return state.posts.map(post => {
      post.user = state.users.find(user => user.email === post.from)
      return post
    })
  },
  post: state => {
    const post = state.post
    if (!post) return null
    post.user = state.users.find(user => user.email === post.from)
    return post
  },
  users: state => state.users,
  user: state => state.user,
  isLoaded: state => state.isLoaded
}

export const mutations = {
  setCredential(state, { user }) {
    state.user = user
  },
  savePost(state, { post }) {
    state.post = post
  },
  setIsLoaded(state, next) {
    state.isLoaded = !!next
  },
  ...firebaseMutations
}

export const actions = {
  async setCredential({ commit }, { user }) {
    if (!user) return
    user = cloneDeep(user)
    const usersCollection = firestore.collection('users')
    await usersCollection
      .doc(user.email.replace('@', '_at_').replace(/\./g, '_dot_'))
      .set({
        name: user.displayName,
        email: user.email,
        icon: user.photoURL
      })
    commit('setCredential', { user })
  },
  async initSingle({ commit }, { id }) {
    const snapshot = await firestore
      .collection('posts')
      .doc(id)
      .get()
    commit('savePost', { post: snapshot.data() })
  },
  initUsers: firebaseAction(({ bindFirebaseRef }) => {
    const usersCollection = firestore.collection('users')
    bindFirebaseRef('users', usersCollection)
  }),
  initPosts: firebaseAction(({ bindFirebaseRef }) => {
    const postsCollection = firestore
      .collection('posts')
      .orderBy('createdAt', 'desc')
    bindFirebaseRef('posts', postsCollection)
  }),
  addPost: firebaseAction((ctx, { id, email, body, createdAt }) => {
    firestore
      .collection('posts')
      .doc(`${id}`)
      .set({
        id,
        from: email,
        body,
        createdAt
      })
  }),
  callAuth() {
    firebase.auth().signInWithRedirect(provider)
  },
  loadComplete({ commit }) {
    commit('setIsLoaded', true)
  }
}
