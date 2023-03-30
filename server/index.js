const path = require('path');
const cors = require('cors')
const express = require("express");
const breeds = require('./breeds/breeds');
const PORT = process.env.PORT || 3001;
const headers = {'Content-Type':'application/json',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
const app = express();
app.use(cors());

await breeds.init();


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/v1/search", (req, res, next) => {
  if(!req.params) {
    res.json([]); // return empty;
  } else if (req.query?.breed === '') {
    res.json([]); // return empty
  }
  let breed = req.query?.breed;
  breeds.findByName(breed)
      .then(data => {
        res.headers = headers;
        res.json(data)
      })
      .catch(next);
});

app.get("/api/v1/breed/:id", (req, res, next) => {

  breeds.getBreedById(req.params.id)
      .then(data => {
        res.headers = headers;
        res.json(data);
      })
      .catch(next);
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

