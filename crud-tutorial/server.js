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

// middleware
app.use(express.static('public'));
app.use(bodyParser.json());
// Express option for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
// Setting Express template engine
app.set('view engine', 'ejs');

MongoClient.connect(connectionString)
  .then((client) => {
    console.log('Connected to database');
    const db = client.db('my-quotes');
    const quotesCollection = db.collection('quotes');

    // getting things from the database
    app.get('/', (request, response) => {
      // response.sendFile(__dirname + '/index.html');
      quotesCollection
        .find()
        .toArray()
        .then((results) => {
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

    // Updating things on the server
    app.put('/quotes', (req, res) => {
      quotesCollection
        .findOneAndUpdate(
          { name: 'Curtis' },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => {
          res.json('Success');
        })
        .catch((error) => console.error(error));
    });

    // Deleting things from the server
    app.delete('/quotes', (req, res) => {
      quotesCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          if (result.deletedCount === 0) {
            return res.json('No quotes to delete');
          }
          res.json("Deleted Ron Swanson's Quote");
        })
        .catch((err) => console.error(err));
    });

    // running the server
    app.listen(port, function () {
      console.log(`Node is doing its thang on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// TODO CRUD - UPDATE @ https://zellwk.com/blog/crud-express-mongodb/
