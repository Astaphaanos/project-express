const express = require('express')
const router = express.Router() // router

const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get('/:id', (req, res) => { // página que será acessada por qualquer id
  res.sendFile(`${basePath}/user.html`) // html
})

module.exports = router // exportando o arquivo router