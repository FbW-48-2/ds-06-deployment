import './config.js'
import mongoose from 'mongoose'
import Student from "./Student.js"
import './db-connect.js'

// Seed in some data
const seed = async () => {
  await Student.deleteMany()

  const arrStudents = [
    { id: "1", name: "Annette" },
    { id: "2", name: "Marie" },
    { id: "3", name: "Katty" },
    { id: "4", name: "Brunette" },
    { id: "5", name: "Cristina" },
  ]

   const StudentDB = await Student.create(arrStudents)
  mongoose.connection.close()
}
seed()