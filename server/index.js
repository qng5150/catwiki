const path = require('path');
const express = require("express");
const breeds = require('./breeds/breeds');
const PORT = process.env.PORT || 3001;

const app = express();
breeds.init();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/v1/search", (req, res) => {

  if(!req.params) {
    res.json([]); // return empty;
  } else if (req.query?.breed === '') {
    res.json([]); // return empty
  }
  let breed = req.query?.breed;
  //res.json(breeds.all());
  res.json(breeds.findByName(breed));
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});