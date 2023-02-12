const express = require('express');
const app = express();

let envelopes = [];

let account = 1000;

app.get('/', (req, res, next) => {
    res.status(200).send(`Welcome. Current balance is: $${account}.`);
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}.`);
});