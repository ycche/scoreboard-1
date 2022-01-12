const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});
mongoose.connection.once('open', () => {
  console.log("MongoDB connection successful.");
})

const inquiryRouter = require('./Routes/inquiry');

app.use('/inquiry', inquiryRouter);

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})
