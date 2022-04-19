const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const pg = require("pg");

// const { fetchAllJokes, fetchJoke } = require("./helpers/db_helpers");
const client = new pg.Client({
  user: "francis",
  host: "localhost",
  database: "jokes",
  password: "francis",
  port: 5432,
});
const generateHelperFunctions = require("./helpers/fancy_db_helpers");
const { fetchAllJokes, fetchJoke } = generateHelperFunctions(client);
const app = express();
client.connect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/hello", (req, res) => {
  res.json({
    name: "YAS",
    icon: "POTATO",
  });
});

app.get("/api/jokes", (req, res) => {
  // Fetch the joke content from DB
  fetchAllJokes().then((dbRes) => res.json(dbRes.rows));
  // Return a JSON response with the rows of the response (db)
});

app.get("/api/jokes/:joke_id", (req, res) => {
  // Fetch the joke content from DB

  fetchJoke(req.params.joke_id).then((dbRes) => res.json(dbRes.rows));
  // Return a JSON response with the rows of the response (db)
});

module.exports = app;
