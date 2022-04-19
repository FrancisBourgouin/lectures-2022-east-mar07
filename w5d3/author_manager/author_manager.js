const pg = require("pg");

const client = new pg.Client({
  user: "francis",
  host: "localhost",
  database: "jokes",
  password: "francis",
  port: 5432,
});
// INSERT INTO authors (name, funny, description) VALUES ('Luciana', TRUE, 'A student in nov 22');

const params = process.argv.slice(2);
const name = params[0];
const isFunny = params[1];
const description = params[2];

// console.log(params);

const query = `
INSERT INTO authors
(name, funny, description)
VALUES
($1, $2, $3)
RETURNING *
`;

const queryParams = [name, isFunny, description];
console.log(query);

const fancyInsertOutput = (res) => {
  console.log("Succesfully inserted a new author");
  console.log("-----------");
  console.log(res.rows[0]);
  console.log("-----------");
};

client
  .connect()
  .then(() => client.query(query, queryParams))
  .then(fancyInsertOutput)
  .catch((error) => console.log(error))
  .finally(() => client.end());
