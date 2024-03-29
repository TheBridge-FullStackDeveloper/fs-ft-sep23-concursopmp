require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
require('./startup/config')()
require('./startup/db')()
require('./startup/routes')(app)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
