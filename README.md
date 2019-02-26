# Nuxt & Firebase(Hosting and Functions SSR), Firestore, Google Auth SNS Example

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![donate: Patreon](https://img.shields.io/badge/donate-patreon-orange.svg?style=flat-square)](https://www.patreon.com/potato4d)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[![Image from Gyazo](https://i.gyazo.com/e9a3fe2379a2896b4f3b882d833d981c.gif)](https://gyazo.com/e9a3fe2379a2896b4f3b882d833d981c)

<a href="https://patreon.com/potato4d">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="50">
</a>

## Requirements

Need the following environment variables.

![Image](https://user-images.githubusercontent.com/6993514/34213945-27f5607e-e5e4-11e7-9761-d5e38e8cf209.png)

```bash
export APIKEY=
export AUTHDOMAIN=
export DATABASEURL=
export PROJECTID=
export STORAGEBUCKET=
export MESSAGINGSENDERID=
```

recommendation: [direnv/direnv](https://github.com/direnv/direnv)

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

## Deploy to Firebase

This application can also be launched with the normal Node.js application.
However, by using Firebase Hosting and Firebase Functions, it can be used efficiently in a serverless environment.

### setup project

```
$ yarn firebase init
```


### setup env

```bash
firebase functions:config:set environment.apikey=""
firebase functions:config:set environment.authdomain=""
firebase functions:config:set environment.databaseurl=""
firebase functions:config:set environment.projectid=""
firebase functions:config:set environment.storagebucket=""
firebase functions:config:set environment.messagingsenderid=""
```

### deploy

```
$ yarn deploy
```
