const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// const geoip = require('geoip-lite');
// const requestIp = require('request-ip');

const port = 80;

let windValue = 0;
let resistValue = 0;

app.use((req, res, next) => {
	// get ip
	/*
	const clientIp = getUserIP(req);
    console.log(clientIp);
	*/
	
	// get geo-location
	/*
	var geo = geoip.lookup(clientIp);
	console.log('geo country', geo);
	*/
	next();
});


app.set('view engine', 'ejs');
app.set('views', __dirname + '/client');

app.use(express.static('client'));

app.post('/wind', (req, res) => {
	windValue = req.query.value;
	console.log('wind post value', windValue);
	
	io.emit('wind', windValue);
});

app.post('/resist', (req, res) => {
	resistValue = req.query.value;
	console.log('resist post value', resistValue);
	
	io.emit('resist', resistValue);
});

app.get('/wind', (req, res) => {
	console.log('wind value', windValue);
	res.end();
});

app.get('/resist', (req, res) => {
	console.log('resist value',  resistValue);
	res.end();
});

app.get('/', (req, res, next) => {
	// res.sendFile(__dirname+'/client/index.html');
	res.render('index.ejs', {windValue, resistValue});
});

io.on('connection', (socket) => {
	console.log('a user connected');
});

http.listen(port);

console.log('Start Server. Listening at: localhost:80');