import './config.js'
import express from 'express'
import "./db-connect.js"
import Student from './Student.js'

console.log("mongo uri: ", process.env.MONGO_URI)
const app = express() 

app.get("/", (req, res) => {
    res.json({message : "Bring me to the web!!!"})
})

app.get("/students", async(req, res) =>{
    const studentsDB = await Student.find()
    res.json(studentsDB)
})

app.get("/students/:id", async(req, res) => {
    const {id} = req.params
    const studentFound = await Student.findById(id)
    res.json(studentFound)
})


const PORT = 5000
app.listen( PORT, () => {
  console.log(`API has started successfully on PORT ${PORT}`)
})
