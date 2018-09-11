const express = require('express')
const app = express()
var start = Date.now()

app.get('/healthz', function(request, response) {
    var msec = Date.now() - start
    var code = 200
    if (msec > 30000 ) {
	code = 500
    }
    console.log('GET /healthz ' + code)
    response.status(code).send('OK')
})

app.get('/', function(request, response) {
    console.log('GET /')
    response.send('Hello from Node.js')
})

app.listen(3000);
