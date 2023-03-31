import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

config();
const localConnectionString = 'mongodb://127.0.0.1:27017/tuiter';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || localConnectionString;
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);