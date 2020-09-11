const express = require('express');
const app = express();

app.use(express.static('dist'));
const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("Tum Tum are running on 3000 port");
})