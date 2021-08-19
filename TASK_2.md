# Deployment Exercise 2 - Deploy an express app with MongoDB

Deploy an express app which uses MongoDB / Mongoose

- Pick one of your exercise apps WITH a database / MongoDB / Mongoose connection
- Grab the db connection string from Atlas
- Adapt the database name in the connection string (replace test with your DB name)
- Replace the connection string in your mongoose project by that one

- Prepare the vercel.json file
  - Configure the node runtime in the key "builds"
  - Whitelist your routes with the key "routes"
  - See example vercel.json file in this repo
  - Please check that you refer to the correct and also the SAME entry file (server.js / index.js / app.js) in your builds AND routes config

- Deploy by running "vercel" in terminal
- Open the link at the end and check your routes


## BONUS

Outsource your connection string to an environment variable

Create a file .env

Put in there a key "MONGO_URI" and state the URL to your Atlas DB

MONGO_URI=<yourConnectionStringFromAtlas>

Install the dotenv package and import it in code:

`require("dotenv").config()`

Use the env variable in your instead of your hardcoded connection string with: 
process.env.MONGO_URI
