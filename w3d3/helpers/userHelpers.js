const userDatabaseIsh = require("../data/users");

const authenticateUser = (email, password, userDB) => {
  if (!userDB[email]) {
    // if userDB at email is undefined or an object
    return { error: "bad email", data: null };
  }

  if (userDB[email].password !== password) {
    // Check if the password is matching the one on record
    return { error: "bad password", data: null };
  }

  return { error: null, data: userDB[email] };
};

const fetchUserInfo = (email, userDB) => {
  return userDB[email] || {};
};

const createUser = (userInfo, userDB) => {
  const { email, password, name, avatar } = userInfo;

  if (!email || !password || !name || !avatar) {
    return { error: "invalid field", data: null };
  }

  const newUser = {
    email,
    name,
    avatar,
    password,
  };

  userDB[email] = newUser;

  return { error: null, data: newUser };
};

userDatabaseIsh.authenticateUser;

module.exports = { authenticateUser, fetchUserInfo, createUser };
