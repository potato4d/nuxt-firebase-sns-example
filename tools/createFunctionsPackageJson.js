const fs = require('fs')
const FunctionsPackage = require('../functions/package.functions.json')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

async function run() {
  const basePackageText = await readFile(__dirname + '/../package.json', {
    encoding: 'utf8'
  })
  const exportJson = JSON.stringify(
    {
      ...JSON.parse(basePackageText),
      ...FunctionsPackage
    },
    null,
    2
  )
  await writeFile(
    __dirname + '/../functions/package.json',
    exportJson,
    { encoding: 'utf8' }
  )
}

run()
