const express = require("express"); // Import Express package, Framework to make a simpler server (http)
const cookieParser = require("cookie-parser");

const { authenticateUser, fetchUserInfo, createUser } = require("./helpers/userHelpers");
const userDatabaseIsh = require("./data/users");

const app = express(); // Instantiate an express object for us to use
const port = 3000; // Store the port value inside the port variable

app.use(cookieParser());
app.use(express.static("public")); // Static files (css / images)
app.use(express.urlencoded({ extended: false })); // Parses the body of a form request string in an object
app.set("view engine", "ejs"); // Set the view engine to EJS

// In the event of a request of type GET, if the route asked it "/", then do the callback defined where
// req is the request and res is the response to send back

app.get("/", (req, res) => {
  const userInfo = fetchUserInfo(req.cookies.email, userDatabaseIsh);

  const templateVars = { avatar: userInfo.avatar };

  return res.render("index", templateVars); // Render the template called "index" and sends the resulting HTML
});

// app.get("/urls/:shortURL")

app.get("/vault/:user_id/:potato_id/:wiggle_id", (req, res) => {
  res.json(req.params);
});

app.post("/login", (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const { email, password } = req.body;
  // Check if the email exists
  const { error } = authenticateUser(email, password, userDatabaseIsh);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  res.cookie("email", email);
  return res.redirect("/");
});

app.get("/register", (req, res) => {
  const templateVars = { avatar: null };
  return res.render("register", templateVars);
});

app.post("/register", (req, res) => {
  const { error, data } = createUser(req.body, userDatabaseIsh);

  if (error) {
    console.log(error);
    return res.redirect("/register");
  }

  res.cookie("email", data.email);
  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
