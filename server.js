const express = require('express');
const { GetLocation, GetMessage } = require('./get_data.js');

const app = express();

app.use(express.json());

const satellites = [
    {"name": "kenobi", "distance": 0, "message": []},
]

app.get('/topsecret/', (req, res) => {
    res.send("Hola Mundo");
});

app.post('/topsecret/', (req, res) => {
    const satellites = req.body.satellites;
    let messages = [];
    let distances = [];
    console.log(satellites.length);
    
    for (var i = 0; i < satellites.length; i++) {
        messages.push(satellites[i].message);
        distances.push(parseInt(satellites[i].distance));
    };

    const emitter_message = GetMessage(messages);
    const emitter_location = GetLocation(distances);
    if (emitter_location !== null & emitter_message !== "") res.status(200).send(emitter_message, emitter_location);
    else res.status(404).send('');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));