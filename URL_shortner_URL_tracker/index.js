const express = require('express')

const app = express()
const PORT = 8001
const URL = require('./models/url')
const urlRoute = require('./routes/url')
const connectMongoDb = require("./connection")

app.use(express.json())

app.use("/url", urlRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId }, 
        {
            $push: {
                viewHistory: {
                    timestamp: Date.now()
                }
            }
        }
    );

    if (!entry) {
        return res.status(404).send('Short URL not found');
    }

    res.redirect(entry.redirectURL);
});

connectMongoDb('mongodb://localhost:27017/short-url').then(() => console.log('mongoDB connected'))

app.listen(PORT, () => console.log(`server started running on ${PORT}`))
