import express from 'express'
import bodyParser from 'body-parser'
import { Promise } from 'es6-promise'

import secrets from './config/secrets'

export const app = express()

app.use(bodyParser.json());
app.post('/iron', (req, res) => {
  console.log(req.body);
})

app.listen((process.env.PORT || 3000), function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('server started');
});
