const marianaTrench = {
  name: "surface",
  sublevel1: {
    name: "1st plateau",
    sublevel2: {
      name: "2nd plateau",
      sublevel3: {
        name: "3rd plato",
      },
    },
  },
};

marianaTrench.sublevel1.sublevel2.sublevel3.name = "3rd plateau";
marianaTrench["sublevel1"]["sublevel2"]["sublevel3"]["name"] = "3rd plateau";

const firstPlateau = marianaTrench.sublevel1;
const secondPlateau = firstPlateau.sublevel2;
const thirdPlateau = secondPlateau.sublevel3;

thirdPlateau.name = "3rd plateau";

console.log(JSON.stringify(marianaTrench));

const person = { name: "Derek", occupation: "Student" };
const otherPerson = person;
otherPerson.name = "Patrice";

console.log(person, otherPerson);

let name = "Derek";
let otherName = name;
otherName = "Patrice";

console.log(name, otherName);
