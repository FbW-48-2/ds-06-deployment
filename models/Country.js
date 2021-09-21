import mongoose from "mongoose"
const { Schema, model } = mongoose

const CountrySchema = new Schema({
  name: { type: String, required: true },
})

const Country = model("Country", CountrySchema)


export default Country 