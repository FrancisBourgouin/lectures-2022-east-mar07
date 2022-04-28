import { useState } from "react";

export default function RepoForm(props) {
  const [formData, setFormData] = useState({
    repo: "",
    owner: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);
    setFormData({
      repo: "",
      name: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="repo"
        placeholder="Enter the repo name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="owner"
        placeholder="Enter the owner name"
        onChange={handleChange}
      />
      <button type="submit">Search!</button>
    </form>
  );
}
