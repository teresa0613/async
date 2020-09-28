import fs from 'fs'
//const { COPYFILE_EXCL } = fs.constants

// destination.txt will be created or overwritten by default.
//fs.copyFileSync('./file1.txt', './file2.txt')
//console.log('source.txt was copied to destination.txt')

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.

try {
    //let content = fs.readFileSync('.././file1.txt', 'utf-8')
    let content = fs.copyFileSync('../file1.txt', '../file2.txt')
    console.log('file copy :', content)
} catch (e) {
    console.log('error')
    console.log(e)
} finally {
    console.log('result')
}
