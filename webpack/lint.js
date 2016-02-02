/*eslint-disable*/
var eslint = require('eslint')
var fs = require('fs')
var _ = require('lodash')
var argv = require('yargs').argv
var lintDir = __dirname + '/../assets/'
var dirs = fs.readdirSync(lintDir)
var isLintAll = _.has(argv, 'all')
_.pull(dirs, 'css', 'fonts', 'img')
var isLintSpec = argv._ && _.contains(dirs, argv._[0])

if (!isLintAll && !isLintSpec) {
  var supportArgsList = ['', '--all'].concat(dirs)
  console.log(`
    代码审查 (node webpack/lint.js) 支持的参数如下：
    ${supportArgsList.join('\t\t\n')}
  `)
  process.exit(1)
} else {
  if (isLintSpec) {
    lintDir += argv._
  }
}

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
