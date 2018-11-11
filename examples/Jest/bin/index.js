const inquirer = require('inquirer')
const shell = require('shelljs')

function compareVersion(v1, v2) {
  var arr1 = v1.replace(/[-_]/g, '.').split('.')
  var arr2 = v2.replace(/[-_]/g, '.').split('.')
  var len = Math.max(arr1.length, arr2.length)
  for (var i = 0; i < len; i++) {
    if (parseInt(arr1[i]) == parseInt(arr2[i])) continue
    return parseInt(arr1[i]) < parseInt(arr2[i]) ? true : false
  }
  return false
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'version',
      message: '请输入新的版本号：',
      validate: function(input) {
        var isVersion = compareVersion('0.1.1', input)
        if (isVersion) {
          return true
        } else {
          return '请输入正确的版本号'
        }
      }
    }
  ])
  .then(answers => {
    ;(async function test() {
      await shell.exec('conventional-changelog -p angular -i CHANGELOG.md -s')
    })()
    shell.exec(
      'git add "CHANGELOG.md" && git commit -m "feat: CHANGELOG.md" && git merge origin/develop && git push'
    )
  })
