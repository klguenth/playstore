const express = require('express');
const morgan = require('morgan');
//const cors = require('cors');
const apps = require('./data.js');
const app = express();

app.use(morgan('common'));

app.get('/apps', (req, res) => {
    const { search = "", sort, genres } = req.query;
    if (sort) {
        if (!['Rating', 'App'].includes(sort)) {
            return res
                .status(400)
                .send('Sort must be one of Rating or App');
        } else {
            return res
                .status(200).send('Will be sorting this soon');
        }
    }
    if (genres) {
        if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)) {
            return res
                .status(400)
                .send('Genre must be one of the following: Action, Puzzle, Strategy, Casual, Arcade, Card');
        } else {
            return res
                .status(200)
                .send('Will be filtering by genre soon');
        }
    }

    if (search) {
        let results = apps
            .filter(app =>
                app
                    .App
                    .includes(search.toLowerCase()));

        res
            .status(200)
            .json(results);
    }

    res.status(200).json(apps);

    app.get("*", (req, res) => {
        res.status(404).end();
    });

});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});