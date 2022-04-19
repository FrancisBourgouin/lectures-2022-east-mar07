const generateHelperFunctions = (client) => {
  const fetchJoke = (jokeId) => {
    const query = `
    SELECT *, jokes.id AS joke_id
    FROM jokes
    JOIN authors
    ON authors.id = jokes.author_id
    WHERE jokes.id = $1`;
    const queryParams = [jokeId];
    return client.query(query, queryParams);
  };

  const fetchAllJokes = () => {
    return client.query("SELECT * FROM jokes");
  };

  return { fetchAllJokes, fetchJoke };
};

module.exports = generateHelperFunctions;
