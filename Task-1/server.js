import express from "express";
const app = express();

app.use( express.json() );

const beatles = [
    { id: 1, fname: "Paul", lname: "McCartney"},
    { id: 2, fname: "John", lname: "Lennon"},
    { id: 3, fname: "George", lname: "Harrison"},
    { id: 4, fname: "Ringo", lname: "Starr"}
];

app.get("/", async (req, res) => {
    res.json({ message: "Kookookachoo"})
});

app.get("/beatles", async (req, res) => {
    res.json( beatles );
});

app.listen(5000, () => {
    console.log("API has started successfully on Port 5000");
});