import app from './app';
import db from "./core/db";
import bodyParser from "body-parser";
import cors from 'cors';
import {Request, Response} from "express";

import CommandeRouter from './routes/commandeUrls';
const port = 9090;

db;

app.use(cors());
app.use(bodyParser.json());
app.use(CommandeRouter)


app.listen(port, (err: any) => {
    if (err) {
        return console.log(err)
    }
    return console.log(`server is listening on ${port}`)
})