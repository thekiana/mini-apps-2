const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  console.log('hi world');
});

app.listen(port, () => console.log(`We be listening on port ${port}`));