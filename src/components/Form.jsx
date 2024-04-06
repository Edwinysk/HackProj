import React, { useState } from 'react';

function EmissionForm() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    method: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        From:
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleChange}
        />
      </label>
      <label>
        To:
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={handleChange}
        />
      </label>
      <label>
        Travel Method:
        <select name="method" value={formData.method} onChange={handleChange}>
          <option value="">Select your travel method</option>
          <option value="car">Walk</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="bus">Bus</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmissionForm;
