//require = import
import express from "express";
import "dotenv/config";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";

//make the app
const app = express();

app.use(cors());
app.use(express.json());

//import routes from a different file
HelloRoutes(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);

//set up the app to listen to requests from port 4000
app.listen(process.env.port || 4000);

//to run: node app.js
//or nodemon app.js to have it update automatically
//then go to localhost:4000/hello
