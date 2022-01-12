const express = require('express');
const cors = require('cors');
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
const api = require('./backend/routes/routes')
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express();
const port = process.env.port || 5000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use(api);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

app.listen(port, ()=> console.log(`PORT: ${port}`))