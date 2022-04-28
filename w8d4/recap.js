class Potato {
  constructor(name) {
    this.name = name;
    this.nickname = name + "y";
  }

  roll = function () {
    console.log(`ROLL ${this.name} ROLL !`);
  };

  throw = function () {
    console.log(`AWWWWWWWWW`);
    console.log(`THUMP.`);
  };
}

const potato1 = new Potato("Yukon Gold");
const potato2 = new Potato("Russet");

// console.log(potato1, potato2);

potato1.roll();
potato2.roll();

class SuperPotato extends Potato {
  constructor(name) {
    super(name);
  }

  fly = function () {
    console.log("I AM FLYING");
  };

  throw = function () {
    console.log(`AWWWWWWWWW`);
    console.log(`HAHA I'LL FLY AWAY`);
  };
}

const potato3 = new SuperPotato("Grelot");

// console.log(potato2, potato3);

potato3.throw();
potato2.throw();
