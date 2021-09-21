import mongoose from 'mongoose'
import Country from "./models/Country.js"
import './db-connect.js'

// Seed in some data
const seed = async () => {
  
  await Country.deleteMany()

  const arrCountries = [
    {name: "Mexico 🇲🇽" },
    {name: "Germany 🇩🇪" },
    {name: "Irland 🇮🇪" },
    {name: "Brazil 🇧🇷" },
    {name: "Japan 🇯🇵" },
  ]

  const dbCountries= await Country.create(arrCountries)

  console.log(`Teachers ${dbCountries}`);

  mongoose.connection.close()
}
seed()