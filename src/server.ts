import express from 'express'
import routes from './routes'
import cors from 'cors'

const PORT : string|number = process.env.PORT || 3333;
const app = express()

app.use(cors({origin: 'https://despensa-frontend.herokuapp.com/'}));
app.use(express.json())
app.use(routes)
app.use("*",(req, res) =>{
  res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,()=>console.log(`🚀 Server started on port ${PORT}`)) 