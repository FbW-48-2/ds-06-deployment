import './config.js'
import express from 'express'  
import cors from 'cors'
import './db-connect.js'
import Country from './models/Country.js'


const app = express() 

app.use( cors() )

app.get("/", (req, res) => {
    res.send(`<h1>SEE MY ROUTES 👇</h1>
    <p><a href="/saludo">go to SALUDO</a></p>
    <p><a href="/begruessung">go to BEGRÜßUNG</a></p>
    <p><a href="/countries">See this Coutries from MONGO DB</a></p>`)
})

app.get("/saludo",  (req, res) => {
    res.send(`<h1>Hola Mundo 🕺🏻😎🇲🇽</h1>
    <p><a href="/">go Home</a></p>`)
})

app.get("/begruessung",  (req, res) => {
    res.send(`<h1>Hallo Welt 🕺🏻😎🇩🇪</h1>
    <p><a href="/">go Home</a></p>`)
})

app.get("/countries", async (req, res)=> {
    const countriesDB = await Country.find()
    res.json(countriesDB)
})

app.get("/countries/:id", async (req, res)=> {
    const countryDB = await Country.findById(req.params.id)
    res.json(countryDB)
})

const PORT = 5000
app.listen( PORT, () => {
  console.log(`API has started successfully`)
  console.log(`http://localhost:${PORT}`);
  console.log(`See a deployment of this exercise here 👉 https://ds-06-deployment-mu.vercel.app/`);
})