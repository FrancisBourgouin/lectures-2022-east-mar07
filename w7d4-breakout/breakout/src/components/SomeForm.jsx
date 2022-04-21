import { useState, useEffect } from "react";

export default function SomeForm(props) {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  useEffect(() => {
    console.log("HELLO FROM THE USEFFECT WOOOOORLD.");
  }, [formData.input2]);

  const handleInput1 = (event) => {
    if (event.target.value.length < 5) {
      setFormData({ ...formData, input1: event.target.value });
    } else {
      console.log("max length exceeded in input", event.target.name);
    }
  };

  const handleInput2 = (event) =>
    setFormData({ ...formData, input2: event.target.value });

  const handleInput3 = (event) =>
    // setFormData({ ...formData, input3: event.target.value });
    (formData.input3 = event.target.value);

  return (
    <form>
      <h1>{formData.input1.length}</h1>
      <input
        type="text"
        name="input1"
        placeholder="Some input thing 1"
        onChange={handleInput1}
        value={formData.input1}
      />
      <input
        type="text"
        name="input2"
        placeholder="Some input thing 2"
        onChange={handleInput2}
        value={formData.input2}
      />
      <input
        type="text"
        name="input3"
        placeholder="Some input thing 3"
        onChange={handleInput3}
        value={formData.input3}
      />
    </form>
  );
}
