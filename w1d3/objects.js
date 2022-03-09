// Types

const someMug = {
  color: "white",
  material: "ceramic",
  capacity: 320,
};

const yetAnotherMug = {
  color: "transparent",
  material: "glass",
  capacity: 500,
};

const listOfMugs = [yetAnotherMug, someMug];

const someOtherMug = ["ceramic", "white", , 320];

const fancyFunction = function () {
  console.log("Yes");
  return "Yes";
};

const someVeryBigObject = {
  someKey: someMug,
  number: 1,
  string: "hello",
  boolean: true,
  functionRef: fancyFunction,
  functionRes: fancyFunction(),
  array: [1, 2, 3, 4],
  object: { a: 1 },
};
