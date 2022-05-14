"use strict";
const app = express();
const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const databaseUrl = process.env.databaseUrl;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { Client } = require("pg");
//const client = new Client(databaseUrl);
const client = new pg.Client({
  connectionString: process.env.databaseUrl,
  ssl: { rejectUnauthorized: false },
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

function MoviesLibrary(title, posterPath, overview) {
  this.title = title;
  this.posterPath = posterPath;
  this.overview = overview;
}

app.use(cors());

// after connection to db, start the server
client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening ${PORT}`);
  });
});

let handleAddMovie = (req, res) => {
  const { name, time, summary, image } = req.body;

  let sql = "INSERT INTO movie(name,time,summary,image ) VALUES($1, $2, $3, $4) RETURNING *;"; // sql query
  let values = [name, time, summary, image];
  client
    .query(sql, values)
    .then((result) => {
      // console.log(result.rows);
      return res.status(201).json(result.rows[0]);
    })
    .catch();
};

let handleUpdateMovie = (req, res) => {
  const { name, time, summary, image } = req.body;

  let sql = "INSERT INTO movie(name,time,summary,image ) VALUES($1, $2, $3, $4) RETURNING *;"; // sql query
  let values = [name, time, summary, image];
  client
    .query(sql, values)
    .then((result) => {
      // console.log(result.rows);
      return res.status(201).json(result.rows[0]);
    })
    .catch();
};

let handleHomePage = (req, res) => {
  /* let sql = "SELECT * from movie;";
  client
    .query(sql)
    .then((result) => {
      // console.log(result);
      return res.status(200).json(result.rows);
    })
    .catch((err) => {
      handleError(err, req, res);
    }); */
};

let handleFavoritePage = (req, res) => {
  return res.status(200).send("Favorite Page");
};

const handleError = (req, res) => {
  return res.status(404).send("page not found");
};

app.post("/movie", handleAddMovie);
app.get("/home", handleHomePage);
app.get("/favorite", handleFavoritePage);
app.get("*", handleError);
app.put("/update-movie", handleUpdateMovie);
