import fs from 'fs'

function callback(err) {
    if (err) throw err
    console.log('source.txt was copied to destination.txt')
}

// destination.txt will be created or overwritten by default.
fs.copyFile('../file1.txt', '../file2.txt', callback)
