import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const firestore = firebase.firestore()

if (process.browser) {
  const settings = { timestampsInSnapshots: true }
  firestore.settings(settings)
}

const usersCollection = firestore.collection('users')
const postsCollection = firestore
  .collection('posts')
  .orderBy('createdAt', 'desc')
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
  async SET_CREDENTIAL({ commit }, { user }) {
    if (!user) return
    await usersCollection
      .doc(user.email.replace('@', '_at_').replace(/\./g, '_dot_'))
      .set({
        name: user.displayName,
        email: user.email,
        icon: user.photoURL
      })
    commit('setCredential', { user })
  },
  async INIT_SINGLE({ commit }, { id }) {
    const snapshot = await firestore
      .collection('posts')
      .doc(id)
      .once('value')
    commit('savePost', { post: snapshot.val() })
  },
  INIT_USERS: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('users', usersCollection)
  }),
  INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('posts', postsCollection)
  }),
  ADD_POST: firebaseAction((ctx, { id, email, body, createdAt }) => {
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
