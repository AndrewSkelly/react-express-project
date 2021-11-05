
const cors = require('cors')
const express = require('express')
const app = express()
const port = 4000

app.use(cors())

app.get('/hey', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Test Info')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
