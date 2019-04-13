const fs = require('fs');
const request = require("request");

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var formidable = require('formidable');
var app = express();

const spawn = require ('child_process').spawn;
const python

app.use(cors());
app.use(bodyParser.json());
app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Express server working successfully!!');
});


app.post('/predict', async (req, res) => {
    try {
        var form = new formidable.IncomingForm();

        //many many callbacks so sorry
        form.parse(req).on('fileBegin', (name, file) => {
            file.path = __dirname + '/heartbeat_classification/uploads/' + file.name;
        }).on('file', (name, file) => {
            console.log(`file saved to `, file.path)
            console.log('calling python script')
            
            //pass the filename as an argument in here as the second item in the array
            const script = spawn('python', [(__dirname+'/heartbeat_classification/logic.py')])
            .stdout.on('data', (data)=>{
                res.send(data);//send the analysis or whatever
            });  
        })
        console.log('done, check the folder for the saved file')
    } catch (err) {
        console.log(err)
        res.json({ error: err })
    }
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




