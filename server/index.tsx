require('dotenv').config()
import express from 'express';
import axios from 'axios'
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';
const MongoClient = require('mongodb').MongoClient
import mongodb from 'mongodb'
const app = express();
const html = fs.readFileSync(path.resolve(__dirname, "../client/index.html"), "utf-8");

app.use(express.urlencoded({extended: true}))
app.use(express.json());

var db
MongoClient.connect(process.env.DB_URL,{useUnifiedTopology: true}, function(err: any, client: { db: (arg0: string) => any; }){
    if (err) return console.log(err)
    db = client.db('test')
    app.listen(process.env.MAIN_PORT, function(){
        console.log('listening on 8080')
    })
})

app.get("/", (req, res) => {
  const renderString = ReactDOMServer.renderToString(<App />);
  res.send(html.replace('<div id="root"></div>', `<div id="root">${renderString}</div>`));
});
app.use("/", express.static("dist/client"));

app.get('/login', (req,res)=>{
  let url = 'https://accounts.google.com/o/oauth2/v2/auth'
  url += `?client_id=${process.env.OAUTH_ID}`
  url += `&redirect_uri=${process.env.OAUTH_URI}`
  url += '&response_type=code'
  url += '&scope=email profile'
  res.redirect(url)
})

app.get('/login/redirect', (req,res)=>{
  const {code} = req.query
  console.log(`code: ${code}`)
  res.send('ok')
})

