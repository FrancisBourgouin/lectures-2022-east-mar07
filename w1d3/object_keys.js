const someMug = {
  color: "white",
  material: "ceramic",
  capacity: 320,
};

console.log(someMug);
someMug.color = "red";
someMug["color"] = "red";

console.log(someMug);
delete someMug.color;

console.log(someMug);

const showTheValueOfTheKey = function (key) {
  console.log(someMug[key]);
};

// dot notation
// bracket notation

// const key = "color";

// console.log(someMug[key]);
// console.log(someMug["color"]);
// console.log(someMug.key);

// someMug.material;
