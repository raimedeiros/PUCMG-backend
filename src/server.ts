import express from 'express'
import routes from './routes'
import cors from 'cors'

const PORT : string|number = process.env.PORT || 3333;
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use("*",(req, res) =>{
  res.send("API Backend is running");
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT,()=>console.log(`🚀 Server started on port ${PORT}`)) 
}

export default app