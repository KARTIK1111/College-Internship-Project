const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all-trainees:AutogenerateSecurePassword@training-cluster.xohin.mongodb.net/sabihaDatabase?retryWrites=true&w=majority", 
{useNewUrlParser: true},
{ useUnifiedTopology: true})
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err))

app.use('/functionup', route);

app.listen(process.env.PORT || 3001, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3001))
});

