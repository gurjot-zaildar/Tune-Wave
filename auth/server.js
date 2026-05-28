import app from "./scr/app.js";
import connectDB from "./scr/db/db.js";
import {connect } from './scr/broker/rabbit.js'

connectDB();
connect();

app.listen(3000,()=>{
    console.log("auth server is running on port 3000");
})
