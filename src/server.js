const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Welcome to express setup with docker!'))

app.listen(3000, () => console.log('Server running at port 3000'))