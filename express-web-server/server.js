import express from 'express';
import router from './routes/router.js';
import dotenv from 'dotenv';

//creates a new web server object
const app = express();

//read in our configuration
dotenv.config({
    path: "./config.env"
})

const middleware1 = (req, res, next) => {
    console.log("Request made");
    next();
}

const middleware2 = (req, res, next) => {
    console.log(new Date().toUTCString());
    next();
}

//attach mu middleware
app.use(middleware1);
app.use(middleware2);

//mount the router
app.use("/home", router);

//bind to a port
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));