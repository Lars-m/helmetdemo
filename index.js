const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());


//This header is set via Nginx, see README.md
// var ninetyDaysInSeconds = 7776000
// app.use(helmet.hpkp({
//   maxAge: ninetyDaysInSeconds,
//   sha256s: ['xmvvalwaPni4IBbhPzFPPMX6JbHlKqua257FmJsWWto=']
// }))

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    //fontSrc : ["'self'",' https: data:'],
  }
}))

app.use(express.static('public'))

app.get("/",(req,res)=>res.send("Check the Response-headers"));
app.get("/api/json",(req,res)=>{
  res.send(JSON.stringify({msg: "I'm a cool litle JSON-encoded object",status: true,statusCode: 200},null,2));
})
app.get("/api/jsonwithcontenttype",(req,res)=>{
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({msg: "I'm a cool litle JSON-encoded object",status: true,statusCode: 200},null,2));
})
app.listen (7654,()=>console.log("Server started, listening on 7654"));
