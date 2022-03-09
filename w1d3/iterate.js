const someMug = {
  color: "white",
  material: "ceramic",
  capacity: 320,
};

// For..in

for (const key in someMug) {
  if (someMug[key] === "white") {
    console.log("Found the value at the key " + key);
  }
}

// For..of (with Object.keys or Object.values)

for (const key of Object.keys(someMug)) {
  if (someMug[key] === "white") {
    console.log("Found the value at the key " + key);
  }
}

const someFunction = function () {
  console.log("Wiggle");
};

const someArrowFunction = () => console.log("Wiggle");

const callback = (key) =>
  someMug[key] === "white" && console.log("Found the value at the key " + key);

Object.keys(someMug).forEach(callback);

// someMug.forEach(function (value) {
//   console.log(value);
// });
