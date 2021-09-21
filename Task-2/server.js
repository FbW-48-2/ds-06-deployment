import express from "express";
import Beatle from "./Beatle.js";
import "./db-connect.js";

const app = express();

app.use( express.json() );

app.get("/", async (req, res) => {
    res.json({ message: "Kookookachoo"})
});

app.get("/beatles", async (req, res) => {
    const beatlesDB = await Beatle.find();
    res.json( beatlesDB );
});

app.listen(5000, () => {
    console.log("API has started successfully on Port 5000");
});