const express = require('express')
const { connect } = require('./config')
const app = express()
const port = 3000
const db = ('config.js')
const response = ('response.js')

//get data
app.get('/mahasiswa', (req, res) => {
  res.send('ini get')

  db.query('SELECT * FROM db_kampus', function (error, result, fields) {
    if (error) throw error;
    console.log('The solution is: ', result[0].solution);
  }
  )
})


// insert data post
app.post('/mahasiswa/post', (req, res) => {
    res.send('Ini Post')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
