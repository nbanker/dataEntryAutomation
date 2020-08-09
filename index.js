const express = require('express');
const app = express();
const xlsx = require('xlsx');
const provision  = xlsx.readFile('./provision.xls');
const rows = xlsx.utils.sheet_to_json(provision.Sheets.PROV, {header: 1});


app.get('/', (req, res) => {
  res.send(rows);
});

app.listen(process.env.PORT || 9001, () => {
  console.log('Server listening on Port: 9001');
});