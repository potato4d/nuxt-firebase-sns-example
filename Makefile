firebase-deploy:
	yarn clean
	yarn build

	rm -rf ./functions/{lib,.nuxt}
	rm -f ./functions/{package.json,yarn.lock}

	node ./tools/createFunctionsPackageJson.js
	cp yarn.lock ./functions/yarn.lock
	cp -r ./.nuxt/ ./functions/.nuxt/

	cp -r ./node_modules/ ./functions/node_modules

	# Copy static files
	mkdir .nuxt/dist/hosting
	mkdir .nuxt/dist/hosting/_nuxt/
	cp -r .nuxt/dist/client .nuxt/dist/hosting/_nuxt/

	# Deploy
	yarn firebase deploy
