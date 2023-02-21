const fs = require('fs');

fs.writeFile('a.txt', 'hello word', (err) => {
    console.log(err)
})

fs.readFileSync('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
fs.appendFileSync('a.txt', '\nline 2', (err) => {
    console.log(err)
})
fs.readFileSync('a.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
fs.renameSync('a.txt', 'b.txt', (err) => {
    if (err) { console.log(err) } else {
        console.log('renamed')
    }

})

fs.unlinkSync('b.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('deleted')
    }
})
