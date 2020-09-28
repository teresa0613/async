/*Rewrite the program promiseCopy.js so it can accept two arguments of the command line:

    a file source , which is the file to copy
    a file dest , which will be the destination of the copy
*/

import fs from 'fs/promises'

//let source = process.argv[2]
const [, , filepath] = process.argv
//console.log(source)
//let source_path = `../${source}`
//console.log

//const destination = process.argv[3]

console.log('Top OF PROGRAM')

const copyFile1 = async (filepath) => {
    let file = fs.readFile(`${filepath}, 'utf-8'`)
    //let content = await fs.copyFile(` '../${file}'`)
    return file
}

console.log('START OF PROGRAM')
let content1 = await copyFile1()
console.log('Content1', content1)
console.log('END OF PROGRAM')
