const http = require('http')

http.createServer(function (req, res) {
    // console.log(req)
    console.log(req.url)
    console.log(req.method)
    req.on('data', (chunk) => {
        console.log(`Data chunk available: ${chunk}`)
    })
    if (req.method == "GET" && req.url == '/add') {
        res.writeHead(200, { 'content-Type': 'application/json' })
        res.end('GET Method')
    }
    if (req.method == "POST" && req.url == '/add1') {
        res.end('POSt Method')
    }
    res.end('no route found')

}).listen(4000, () => {
    console.log('server started')
})
