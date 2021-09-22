import './config.js'
import mongoose from 'mongoose';
import jsdom from "jsdom";
import got from "got";
import Headline from './models/Headline.js'

const { JSDOM } = jsdom;

(async function(){
  const MONGO_URI = process.env.MONGO_URI ;

  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

  // delete  articles id db
  try {
    await Headline.deleteMany({});
    console.log("Deleted all articles");
  } catch (error) {
    console.log(error)
  }


  //todo newspaper array, more to come
  let newspapers = [{url: 'https://www.jungewelt.de/', selector: '.title'} , {url: "https://www.bz-berlin.de/", selector: '.h2'},]

  // get headlines from the site
  let headlines = newspapers.map(async (newspaper) => {
    try {
      const response = await got(newspaper.url);
      // console.log(response)
      const dom = new JSDOM(response.body);
      // console.log(dom)
      const nodeList = [
        ...dom.window.document.querySelectorAll(newspaper.selector),
      ];
      // console.log(nodeList)
      const data = nodeList.map((node) => {
        return node.textContent;
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  });

  try {
    const resolvedHeadlines = await Promise.all(headlines);

    const headlinePromises = resolvedHeadlines.map( (headline)=>{
      const headlineSlice = headline.slice(3,14);
      const headlineData = {
        data: headlineSlice
      };
      const data = new Headline(headlineData);
      return data.save();
    } );

    await Promise.all(headlinePromises);
    console.log('Data saved')

  } catch (error) {
    console.log(error)
  }

  mongoose.disconnect()
})()
  
  

