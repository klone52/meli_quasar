const express = require('express');
const { GetLocation, GetMessage } = require('./get_data.js');

const app = express();

app.use(express.json());

var satellites = [
    {"name": "kenobi", "distance": 0, "message": []},
    {"name": "skywalker", "distance": 0, "message": []},
    {"name": "sato", "distance": 0, "message": []},
]

app.post('/topsecret/', (req, res) => {
    // Input Data
    const satellites = req.body.satellites;
    let messages = [];
    let distances = [];
    
    // Extract and format data 
    for (var i = 0; i < satellites.length; i++) {
        messages.push(satellites[i].message);
        distances.push(parseInt(satellites[i].distance));
    };

    // Generete response
    const emitter_message = GetMessage(messages);
    const emitter_location = GetLocation(distances);

    // Check if results are valid
    if (emitter_location !== null & emitter_message !== "") {
        const respose = {
            "position": {
                "x": emitter_location.x,
                "y": emitter_location.y
            },
            "message": emitter_message
        }
        res.status(200).send(respose);
    }
    else res.status(404).send("");
});

app.post('/topsecret_split/', (req, res) => {
    // Input Data
    const satellites = req.body.satellites;
    let messages = [];
    let distances = [];
    
    // Extract and format data 
    for (var i = 0; i < satellites.length; i++) {
        messages.push(satellites[i].message);
        distances.push(parseInt(satellites[i].distance));
    };

    // Generete response
    const emitter_message = GetMessage(messages);
    const emitter_location = GetLocation(distances);

    // Check if results are valid
    if (emitter_location !== null & emitter_message !== "") {
        const respose = {
            "position": {
                "x": emitter_location.x,
                "y": emitter_location.y
            },
            "message": emitter_message
        }
        res.status(200).send(respose);
    }
    else res.status(404).send("No hay suficiente información");
});

app.post('/topsecret_split/:name', (req, res) => {
    // Input Data updated from request
    var satellite = satellites.find(sat => sat.name === req.params.name);
    satellite.distance = parseInt(req.body.distance);
    satellite.message = req.body.message;
    
    let messages = [];
    let distances = [];
    
    // Extract and format data 
    for (var i = 0; i < satellites.length; i++) {
        messages.push(satellites[i].message);
        distances.push(parseInt(satellites[i].distance));
    };

    // Generete response
    const emitter_message = GetMessage(messages);
    const emitter_location = GetLocation(distances);

    // Check if results are valid
    if (emitter_location !== null & emitter_message !== "") {
        const respose = {
            "position": {
                "x": emitter_location.x,
                "y": emitter_location.y
            },
            "message": emitter_message
        }
        res.status(200).send(respose);
    }
    else res.status(404).send("No hay suficiente información");
});

app.get('/topsecret_split/', (req, res) => {
    //Input Data from global variable

    let messages = [];
    let distances = [];
    console.log(satellites.length);
    
    // Extract and format data 
    for (var i = 0; i < satellites.length; i++) {
        messages.push(satellites[i].message);
        distances.push(parseInt(satellites[i].distance));
    };

    // Generete response
    const emitter_message = GetMessage(messages);
    const emitter_location = GetLocation(distances);

    // Check if results are valid
    if (emitter_location !== null & emitter_message !== "") {
        const respose = {
            "position": {
                "x": emitter_location.x,
                "y": emitter_location.y
            },
            "message": emitter_message
        }
        res.status(200).send(respose);
    }
    else res.status(404).send("No hay suficiente información");
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));