import app from "./scr/app.js";
import connectDB from "./scr/db/db.js";

connectDB();

app.listen(3000,()=>{
    console.log("auth server is running on port 3000");
})
