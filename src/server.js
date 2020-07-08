const express = require('express')

const app = express()
app.use(express.json())

app.get('/',(request,response)=>{
  return response.json({message:'success config'})
})

app.listen(3333)