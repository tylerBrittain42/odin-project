const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {

    // sets desiredPath to index in cases where no path is specified
    const desiredPath = (url.parse(req.url).pathname === "/") ? 'index.html': url.parse(req.url).pathname.substring(1) + '.html'

    // Without this: will try and load the favicon file
    if (desiredPath === 'favicon.ico.html')
        return

    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile(desiredPath, (e, data) => {
        if(e){
            // console.log(e)
            fs.readFile('404.html', (e, data) => {
                res.write(data)
                return res.end()
            })
        }
        else{
            res.write(data)
            return res.end()
        }
    })

}).listen(8080, () => {
    console.log("listening on port 8080")
})
