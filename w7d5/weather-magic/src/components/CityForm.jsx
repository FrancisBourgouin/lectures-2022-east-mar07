import { useState } from "react";

export default function CityForm(props) {
  const [formData, setFormData] = useState({
    city: "",
  });
  const { city } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    // formData[name]
    const newnewFormData = { ...formData, [name]: value };
    setFormData(newnewFormData);

    // const newFormData = { ...formData };
    // newFormData[name] = value;
    // setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    setFormData({
      city: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter city name"
        onChange={handleChange}
        value={city}
      />
    </form>
  );
}
