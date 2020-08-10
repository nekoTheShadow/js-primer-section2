const program = require('commander')
const fs = require('fs')
const marked = require('marked')

program.option('--gfm', 'GFMを有効にする')
program.parse(process.argv)
const filePath = program.args[0]
const options = program.opts()

fs.readFile(filePath, {encoding: 'utf-8'}, (err, file) => {
  if (err) {
    console.log(err.message)
    process.exit(1)
    return 
  }

  const html = marked(file, {
    gfm: false
  })
  console.log(html)
})
