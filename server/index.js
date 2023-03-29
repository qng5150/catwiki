const path = require('path');
const express = require("express");
const breeds = require('./breeds/breeds');
const PORT = process.env.PORT || 3001;

const app = express();
breeds.init();

function cors(req, res) {
  const allowedOrigins = ['http://localhost:3000', 'https://qng-catty-api.onrender.com/'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
}

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/v1/search", (req, res, next) => {
  cors(req, res);
  if(!req.params) {
    res.json([]); // return empty;
  } else if (req.query?.breed === '') {
    res.json([]); // return empty
  }
  let breed = req.query?.breed;
  breeds.findByName(breed)
      .then(data => res.json(data))
      .catch(next);
});

app.get("/api/v1/breed/:id", (req, res, next) => {

  breeds.getBreedById(req.params.id)
      .then(data => {
        cors(req, res);
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

