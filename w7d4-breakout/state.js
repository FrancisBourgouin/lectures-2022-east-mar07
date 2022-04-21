const someUseStateClone = (value) => {
  const data = { current: value };

  const setData = (value) => (data.current = value);

  return [data.current, setData];
};

const someFakeComponent = () => {
  const [data, setData] = someUseStateClone(5);
};
