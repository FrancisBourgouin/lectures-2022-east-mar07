const someOtherFunction = (action) => {};

const someFunction = () => {
  let bob = 5;

  const changeBob = (value) => (bob = value);

  someOtherFunction(changeBob);
};
