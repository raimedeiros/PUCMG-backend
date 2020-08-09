import express from 'express'
import routes from './routes'
import cors from 'cors'

const PORT : string|number = process.env.PORT || 3333;
const app = express()

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'false');

  // Pass to next layer of middleware
  next();
});
app.use(express.json())
app.use(routes)
app.use("*",(req, res) =>{
  res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,()=>console.log(`🚀 Server started on port ${PORT}`)) 