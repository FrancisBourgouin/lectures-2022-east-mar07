const mugOfCoffee = {
  color: "transparent",
  material: "glass",
  capacity: 500,
  amountOfCoffee: 500,
  drink: function () {
    this.amountOfCoffee = this.amountOfCoffee - 50;
    console.log("Coffee remaining: " + this.amountOfCoffee);
    console.log("Mmm. That coffee is great");
  },
  showMeThis: function () {
    console.log(this);
  },
};

const mugOfTea = {
  color: "transparent",
  material: "glass",
  capacity: 500,
  amountOfCoffee: 500,
  actions: {
    drink: function () {
      this.amountOfCoffee = this.amountOfCoffee - 50;
      console.log("Coffee remaining: " + this.amountOfCoffee);
      console.log("Mmm. That coffee is great");
    },
    showMeThis: function () {
      console.log(this);
    },
  },
};

// mugOfCoffee.drink();
// mugOfCoffee.drink();
// mugOfCoffee.drink();
// mugOfCoffee.drink();

// mugOfCoffee.showMeThis();

mugOfTea.actions.showMeThis();
