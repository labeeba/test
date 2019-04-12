const fs = require('fs');
const request = require("request");

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Express server working successfully!!');
});


app.post('/predict', function (req, res) {
    const param = req.body;
    const file_name = param.file;
    console.log(file_name);


    request({
        uri: "http://localhost:5001/predict",
        method: "POST",

        formData: {
            // file: fs.createReadStream(file_location)
            file: fs.createReadStream(file_name)
        }
    }, function (error, response, body) {
        var data = body;
        res.send(data);
        console.log(data);

    });

});


// custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});


app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');

});




