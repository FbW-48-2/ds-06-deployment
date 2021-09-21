import mongoose from "mongoose"
const { Schema, model } = mongoose

const StudentSchema = new Schema({
  name: { type: String, required: true },
})

const Student = model("StudentDB", StudentSchema)

export default Student