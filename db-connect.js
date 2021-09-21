import mongoose from 'mongoose'
import './config.js'


const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/deploy_parcel'

const settings= {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }


mongoose.connect(MONGO_URI)
.then(() => console.log("Connection to database established!"))
.catch((err) => console.log("[ERROR] Connection failed!", err.message))