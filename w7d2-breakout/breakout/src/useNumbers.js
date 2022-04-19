const useNumbers = (originalValue) => {
  const [number, setNumber] = useState(originalValue);

  const randomChange = () => setNumber(Math.random());

  const add = (value) => setNumber(number + value);

  const substract = (value) => setNumber(number - value);

  return [number, randomChange, add, substract];
};

export default useNumbers;
