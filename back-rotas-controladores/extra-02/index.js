const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());




app.listem(8000);

