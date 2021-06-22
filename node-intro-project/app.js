const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {

    const desiredPath = url.parse(req.url).pathname.substring(1) + '.html'

    // Without this: will try and load the favicon file
    if (desiredPath === 'favicon.ico.html')
        return

    console.log(desiredPath)

    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile(desiredPath, (e, data) => {
        if(e){
            console.log(e)
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

}).listen(8080)
