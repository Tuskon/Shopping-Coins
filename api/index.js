const express = require ('express')
const cors = require('cors');
const app = express()
const port = 8080
const GeneralRoutes=require('./routes/GeneralRoutes')

app.use(cors());
app.use(express.json());
app.use('/',GeneralRoutes)

app.listen(port, () => {
  console.log(`Servidor Rodando na porta ${port}`)
})