firebase-deploy:
	yarn clean
	yarn build
	mkdir dist
	rm -rf ./functions/{lib,node_modules}
	rm -f ./functions/{package.json,yarn.lock}
	node ./tools/createFunctionsPackageJson.js
	cp -r node_modules ./functions/node_modules
	cp yarn.lock ./functions/yarn.lock
	# cd ./functions && yarn
	cp -R functions dist/server
	cp -R app/static/ dist/client
	cp -R .nuxt dist/server
	cp -R dist/server/.nuxt/dist dist/client/assets
	yarn firebase deploy
