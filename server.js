const express =  require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const connectDB = require('./config/db');

connectDB();

//Templates
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(port, () => {
	console.log(`Listening on ${port}`);
})