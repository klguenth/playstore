const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('common'));

const apps = require('./data.js');


app.get('/apps', (req, res) => {
    const { search = "", sort, genres } = req.query;
    if (sort) {
        if (!['rating', 'app'].includes(sort)) {
            return res
                .status(400)
                .send('Sort must be one of rating or app');
        }
    }
    if (genres) {
        if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)) {
            return res
                .status(400)
                .send('Genre must be one of the following: Action, Puzzle, Strategy, Casual, Arcade, Card');
        }
    }

    if (res === (search, sort, genres)) {
        return res;
    }

    let results = apps
        .filter(app =>
            app);

  res
    .json(results);
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});