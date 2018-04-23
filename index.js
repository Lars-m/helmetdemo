const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
app.get("/",(req,res)=>res.send("Check the Response-headers"));
app.listen (7654,()=>console.log("Server started, listening on 7654"));
