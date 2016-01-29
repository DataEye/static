/*eslint-disable*/
var eslint = require('eslint')
var argv = require('yargs').argv
var lintDir = __dirname + '/../assets/' + argv._

console.log(`Eslint审查目录代码:\n${lintDir}`)

var cli = new eslint.CLIEngine({
  configFile: __dirname + '/../.eslintrc',
  useEslintrc: true,
  ignore: true,
  ignorePath: __dirname + '/../.eslintignore',
  extensions: ['jsx', 'js']
})
var report = cli.executeOnFiles([lintDir])
if (report.errorCount > 0) {
  var fileList = report.results.filter((item)=> item.errorCount > 0)
    .map((item)=> item.filePath)
  console.log(`
    源码不规范，请检查这些文件:
    ${fileList.join('\n')}\n\n
  `)
  process.exit(1)
}
