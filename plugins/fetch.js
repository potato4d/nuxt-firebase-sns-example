import auth from '~/plugins/auth'

export default async function ({ store }) {
  if (process.browser) {
    alert(1)
    let user
    try {
      user = await auth()
    } catch (e) {
      console.log(e)
    }
    await store.dispatch('SET_CREDENTIAL', { user: user || null })
    await store.dispatch('INIT_POSTS')
  }
}
