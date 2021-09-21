import mongoose from "mongoose";
import Beatle from "./Beatle.js";
import "./db-connect.js";

const seed = async () => {

    await Beatle.deleteMany();

    const beatles = [
        { fname: "Paul", lname: "McCartney"},
        { fname: "John", lname: "Lennon"},
        { fname: "George", lname: "Harrison"},
        { fname: "Ringo", lname: "Starr"}
    ];

    const beatlesDB = await Beatle.create( beatles );

    console.log(`Seeded ${beatlesDB.length} Beatles into DB`);

    mongoose.connection.close();
};

seed();