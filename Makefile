firebase-deploy:
	yarn clean
	yarn build

	mkdir dist

	rm -rf ./functions/{lib,node_modules}
	rm -f ./functions/{package.json,yarn.lock}

	node ./tools/createFunctionsPackageJson.js
	cp yarn.lock ./functions/yarn.lock
	cp -R functions dist/server
	cp -r node_modules ./dist/server/node_modules

	# Copy static files
	cp -R app/static/ dist/client
	cp -R .nuxt/dist/client dist/client/_nuxt/

	# Copy server files
	cp -R .nuxt dist/server

	# Deploy
	yarn firebase deploy
