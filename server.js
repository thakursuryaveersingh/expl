var express= require('express');
var path = require('path');
var bodyParser= require('body-parser');

var app= express();
app.set('port', (process.env.port|| 3000));
app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(app.get('port'),function(){
	console.log('Server has startec on port: '+app.get('port'));
});
