//require = import
import express from "express";
import "dotenv/config";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/users/routes.js";
import session from "express-session";

//make the app
const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
console.log(CONNECTION_STRING);
console.log(process.env);
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  
app.use(
    session(sessionOptions)
);
app.use(express.json());

//added from stackoverflow post:
//https://stackoverflow.com/questions/55386359/mongoose-with-mongodb-atlas-return-empty-array
mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true, dbName: "kanbas"});


//import routes from a different file
HelloRoutes(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

//set up the app to listen to requests from port 4000
app.listen(process.env.port || 4000);

//to run: node app.js
//or nodemon app.js to have it update automatically
//then go to localhost:4000/hello
