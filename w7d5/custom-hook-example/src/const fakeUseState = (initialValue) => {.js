const fakeUseState = (initialValue) => {
  const data = { current: initialValue };

  const setData = (value) => (data.current = value);

  return [data.current, setData];
  // Magic trigger, to run the function again IF the data changes
};

const someFakeComponent = () => {
  const [name, setName] = fakeUseState("Bob");
  const bob = 5;
};
