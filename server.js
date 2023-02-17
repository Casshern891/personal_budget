const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let envelopes = [];

let account = 1000;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.status(200).send(`Welcome. Current balance is: $${account}.`);
});




const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}.`);
});