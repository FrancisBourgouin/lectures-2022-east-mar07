const someObject = {
  name: "Petit Poulet",
  icon: "🐔",
  age: 9000,
  skills: {
    javascript: "good",
  },
};

// Access a key value when we know the name of the key

someObject.age;
someObject.age = 1;

someObject["age"];
someObject["age"] = 1;

// Access a key value when we don't know the key name yet

const someKey = "age";

someObject[someKey];
someObject[someKey] = 1;

// Add a key value to an object

someObject.sound = "Pock pock";
someObject["sound"] = "Pock pock";

// Delete a key value from an object

delete someObject.sound;
delete someObject["sound"];

// Access a deep nested value

someObject.skills.javascript;
someObject.skills.javascript = "bad";

someObject["skills"]["javascript"];
someObject["skills"]["javascript"] = "bad";

someObject["skills"].javascript;
someObject["skills"].javascript = "bad";

// Referencing objects and sub-objects

const skills = someObject.skills;

// Methods / this (Functions with context)

someObject.greetings = function () {
  console.log("Hi my name is: " + this.name);
};
