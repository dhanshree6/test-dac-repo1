const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors('*'))
app.use(express.json())

const productRouter = require('./routes/product')
app.use('/', productRouter)

app.listen(5000, '0.0.0.0', () => {
  console.log('server started on port 5000')
})
