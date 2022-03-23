const user1 = {
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  password: "paris",
  avatar: "🎩",
};

const user2 = {
  name: "Doug Judy",
  email: "pontiac@bandit.com",
  password: "ilovejake",
  avatar: "🚗",
};

// const userDatabaseIsh = [user1, user2]
const userDatabaseIsh = {
  "gentleman@cambrioleur.com": user1,
  "pontiac@bandit.com": user2,
};

module.exports = userDatabaseIsh;
