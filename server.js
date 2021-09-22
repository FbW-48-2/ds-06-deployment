import express from "express";
import cors from "cors";
import headlinesRouter from "./routes/headlinesRouter.js"
import './scrapeData.js'

const app = express();

const port = 6000;

// mongoose 
import './db-connect.js'

// express middlware
app.use(express.json()); // for parsing application/json
app.use(cors())

// endpoints
app.get('/', (req, res)=> {
  res.send('Hello World')
})

// routes
app.use('/headlines', headlinesRouter)


// listen on port
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});


app.use( (err, req, res, next) => {
  res.status(err.status || 400).send({
    error: {
      message: err.message,
      status: err.status
    }
  })
})
