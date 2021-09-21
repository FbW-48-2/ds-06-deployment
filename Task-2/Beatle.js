import mongoose from "mongoose";
const { Schema, model } = mongoose;

const BeatleSchema = new Schema({
    fname: String,
    lname: String
}, {
    versionKey: false,
    timestamps: true
});

const Beatle = model("Beatle", BeatleSchema);

export default Beatle;