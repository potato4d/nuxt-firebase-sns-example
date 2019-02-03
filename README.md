# Nuxt & Firebase(Hosting and Functions SSR), Firestore, Google Auth SNS Example

[![Image from Gyazo](https://i.gyazo.com/e9a3fe2379a2896b4f3b882d833d981c.gif)](https://gyazo.com/e9a3fe2379a2896b4f3b882d833d981c)

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
