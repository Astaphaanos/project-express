
const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const basePath = path.join(__dirname, '/templates') // caminho dos arquivos html

const rotas = require('./router') // importando os arquivo com outras rotas

app.use(express.static('public')) // arquivo css

app.use(rotas) // usando o arquivo de rotas

app.get('/', (req, res) => { // página home
  res.sendFile(`${basePath}/home.html`) // html
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`) // servidor porta 5000
})