"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
const uri = process.env.MONGODB_URL;
// @ts-ignore
const db = mongoose_1.default.connect(uri, options).
    then(() => {
    console.log({ uri });
    console.log('successfully connected to the db');
}).
    catch((error) => console.error({ error }));
mongoose_1.default.set('bufferCommands', false);
exports.default = db;
