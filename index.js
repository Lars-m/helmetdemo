const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
var ninetyDaysInSeconds = 7776000

app.use(helmet.hpkp({
  maxAge: ninetyDaysInSeconds,
  sha256s: ['xmvvalwaPni4IBbhPzFPPMX6JbHlKqua257FmJsWWto=']
}))


app.get("/",(req,res)=>res.send("Check the Response-headers"));
app.listen (7654,()=>console.log("Server started, listening on 7654"));
