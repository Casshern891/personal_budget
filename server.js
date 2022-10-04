const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send("Hello World!");
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}.`);
});