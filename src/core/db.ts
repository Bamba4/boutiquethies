import mongoose from "mongoose";

require('dotenv').config();
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
const uri = process.env.MONGODB_URL
// @ts-ignore

const db = mongoose.connect(uri, options).
    then(() => {
        console.log({ uri })
        console.log('successfully connected to the db')
    }).
    catch((error: any) => console.error({ error}));
mongoose.set('bufferCommands', false);

export default db;