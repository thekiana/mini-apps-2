const express = require('express');
const request = require('request-promise');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/api/bitcoin', function (req, res) {

  let options = {
    url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-30`,
    headers: {
      'User-Agent': 'request-promise',
      'Content-Type': 'application/json'
    }
  }

  request(options)
  .then((response) => {
    var apiResponse = JSON.parse(response);

    res.status(200).send(apiResponse.bpi);
  })
  .catch((err) => {
    res.status(404).send(err);
  });

});

app.listen(port, () => {
  console.log(`We be listening on port ${port}`);
});
