
const cors = require('cors')
const express = require('express')
const { Pool, Client } = require('pg')
const app = express()
const port = 4000

const client = new Client()

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'keroli',
  password: 'Mrbeastman648',
  port: '5432',
})



let stu = {
  student_id: 'X00161363',
  fname: 'Andrew',
  lname: 'Skelly'
}

function result() {
  pool.query('SELECT * FROM person', (err, res) => {
    let x = res.rows[1]
    console.log()
    pool.end()
    app.get('/hey', (req, res) => {
      res.json(x)
    })
  })
}

result()

app.use(cors())


// app.get('/hey', (req, res) => {
//   res.send(stu)
// })

app.get('/test', (req, res) => {
  res.send('Test Info')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
