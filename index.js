const express = require('express');
const app = express();
const xlsx = require('xlsx');

const provision  = xlsx.readFile('./data.xlsx');
const sheets = provision.SheetNames;
const rows = xlsx.utils.sheet_to_json(provision.Sheets[sheets[0]], {header: 1});

app.get('/', (req, res) => {
  res.send(rows);
});

app.listen(process.env.PORT || 9001, () => {
  console.log('Server listening on Port: 9001');
});