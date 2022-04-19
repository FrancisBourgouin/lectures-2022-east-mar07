// How to access postgresql ??
const pg = require("pg");

const client = new pg.Client({
  user: "francis",
  host: "localhost",
  database: "jokes",
  password: "francis",
  port: 5432,
});

// try{
//   await client.connect()

// } catch(e){

// }

const fancyOutputForJokes = (listOfJokes) => {
  for (const joke of listOfJokes) {
    console.log(
      `Question: ${joke.question} \nAnswer: ${joke.answer} \nBy author ${joke.author} \n\n`
    );
  }
};

// client
//   .connect()
//   .then(() => client.query("SELECT * FROM jokes"))
//   .then((res) => fancyOutputForJokes(res.rows))
//   .catch((error) => console.log(error));

// try {
//   await client.connect();
//   const res = await client.query("SELECT * FROM jokes");
//   fancyOutputForJokes(res);
// } catch (e) {
//   console.log(e);
// }

const query = `
SELECT jokes.*, authors.name AS author 
FROM jokes 
JOIN authors ON jokes.author_id = authors.id
ORDER BY random() 
LIMIT 1
`;

client
  .connect()
  .then(() => client.query(query))
  .then((res) => fancyOutputForJokes(res.rows))
  .then(() => client.query(query))
  .then((res) => fancyOutputForJokes(res.rows))
  .then(() => client.query(query))
  .then((res) => fancyOutputForJokes(res.rows))
  .then(() => client.query(query))
  .then((res) => fancyOutputForJokes(res.rows))
  .catch((error) => console.log(error))
  .finally(() => client.end());

// Start a loading animation
// Promise loading
// Stop a loading animation
