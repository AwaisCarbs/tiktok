import express from "express";
import
mongoose
from "mongoose";
import data from "./data.js";
import tiktokVideos from "./dbModel.js";
import Cors from 'cors';

// app config
const app = express();
const port = process.env.port || 9000
// db config
const connection_url = "mongodb+srv://root:abbasi@cluster0.7oj1e.mongodb.net/tiktok?retryWrites=true&w=majority"
mongoose.connect(connection_url)

/* middleware */
app.use(express.json())
/* add cors header */
app.use(Cors())


/* api end points */
app.get("/", (req, res) => res.status(200).send("helloworld"))
app.get("/v1/posts", (req, res) => res.status(200).send(data))

app.post("/v2/posts", (req, res) => {
    const dbVideos = req.body;
    tiktokVideos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
})
app.get("/v2/posts", (req, res) => {
    tiktokVideos.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
})



app.listen(port, () => console.log(`listening to: ${port}`));