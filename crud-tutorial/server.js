import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import { connectionString } from './password.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 8000;

MongoClient.connect(connectionString)
  .then((client) => {
    console.log('Connected to database');
    const db = client.db('my-quotes');
    const quotesCollection = db.collection('quotes');

    // Express option for parsing form data
    app.use(bodyParser.urlencoded({ extended: true }));
    // Setting Express template engine
    app.set('view engine', 'ejs');

    // getting things from the database
    app.get('/', (request, response) => {
      // response.sendFile(__dirname + '/index.html');
      quotesCollection
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          response.render('index.ejs', { quotes: results });
        })
        .catch((err) => console.error(err));
    });

    // Sending things to the database
    app.post('/quotes', (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
          res.redirect('/');
        })
        .catch((err) => console.error(err));
    });
    // running the server
    app.listen(port, function () {
      console.log(`Node is doing its thang on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
