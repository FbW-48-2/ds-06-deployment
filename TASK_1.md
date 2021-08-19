# Deployment Exercise 1 - Deploy a simple express app

Deploy a simple express app from your exercises

- Pick an app WITHOUT database / MongoDB / Mongoose
	- or write a simple one with two routes

- Prepare the vercel.json file
  - Configure the node runtime in the key "builds"
  - Whitelist your routes with the key "routes"
  - See example vercel.json file in this repo
  - Please check that you refer to the correct and also the SAME entry file (server.js / index.js / app.js) in your builds AND routes config

- Deploy by running "vercel" in terminal
- Open the link at the end and check if your routes work

- Wanna fix something an deploy again?
	- running `vercel` again will create a so called "preview deploy"
	- now you can test on that "preview url" that you get, if everything works now
	- everything okay? then deploy to your production url: `vercel --prod`
