import app from './app';
import db from "./core/db";
import bodyParser from "body-parser";
import cors from 'cors';
import {Request, Response} from "express";
require('dotenv').config();

import CommandeRouter from './routes/commandeUrls';
import InitialStockRouter from './routes/initialStockUrls';
const port = process.env.PORT || 9090;

db;

app.use(cors());
app.use(bodyParser.json());
app.use(CommandeRouter)
app.use(InitialStockRouter)

app.listen(port, (err: any) => {
    if (err) {
        return console.log(err)
    }
    return console.log(`server is listening on ${port}`)
})