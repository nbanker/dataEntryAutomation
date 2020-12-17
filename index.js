const { json } = require('express');
const express = require('express');
const app = express();
const xlsx = require('xlsx');
const flatten = require('./flatten');
const consoleScraper = require('./consoleScraper');
// const provision  = xlsx.readFile('./data.xlsx');
// const sheets = provision.SheetNames;
// const rows = xlsx.utils.sheet_to_json(provision.Sheets[sheets[0]], {header: 1});
let homeConsoles = consoleScraper();

app.get('/', (req, res) => {
	res.send(homeConsoles);
});

app.listen(process.env.PORT || 9001, () => {
	console.log('Server listening on Port: 9001');
});
