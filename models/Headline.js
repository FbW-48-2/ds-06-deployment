import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const HeadlineSchema = new Schema({
    data: Array 
},{versionKey: false});

const Headline = model('Headline', HeadlineSchema);
export default Headline;