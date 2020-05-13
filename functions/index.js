const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const app = express()

const envs = functions.config().environment

Object.entries(envs).forEach((k, v) => {
  process.env[`${k}`.toUpperCase()] = v
})

const config = {
  dev: false
}
const nuxt = new Nuxt(config)

app.use(nuxt.render)
exports.ssr = functions.https.onRequest(app)
