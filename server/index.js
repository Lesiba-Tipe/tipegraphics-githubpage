const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;
var cors = require('cors')

express()
    .use(cors())
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.send('Server laoded successfully'))
    .get('/data', (req, res) => res.sendFile(path.resolve('../docs/shared/data.json')))
    .listen(PORT, () => console.log(`Listening on localhost:${ PORT }`))
