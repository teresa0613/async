//import fs from 'fs'
import fs from 'fs/promises'

console.log('Top OF PROGRAM')

const copyFile1 = async () => {
    let content = await fs.copyFile('../file1.txt', '../file2.txt')
    return content
}

console.log('START OF PROGRAM')
let content1 = await copyFile1()
console.log('Content1', content1)
console.log('END OF PROGRAM')
