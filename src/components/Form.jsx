import React, {useState} from "react";

function EmissionForm() {
  const [formData, setFormData] = useState({
    distance: "",
    // to: "",
    method: "",
  });
  
  const vehicleEfficiencies = {
    car: 25, 
    bike: 0,
    muni: 15,
    caltrain: 2.5
  };

  const [emissionResult, setEmissionResult] = useState(null);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emissions = calculateEmissions(formData.distance);
    setEmissionResult(emissions);

    console.log(formData);
  };

  const calculateEmissions = (distance) => {
    const CO2EmissionsKg = (distance / 25) * 8.89 * Math.pow(10, -3);
    return CO2EmissionsKg.toFixed(4);
  };

  return (
    <div>
      <h1>GoEco - San Francisco</h1> {/* Title */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>
            Distance:
          </label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            placeholder="Enter distance"
          />
          <p style={{ marginLeft: '10px' }}>Miles</p>
        </div>
        {/* <label>
          To:
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
          />
        </label> */}
        <label>
          Travel Method:
          <select name="method" value={formData.method} onChange={handleChange}>
            <option value="">Select your travel method</option>
            <option value="walk">Walk</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="muni">Muni</option>
            <option value="caltrain">Caltrain</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      {emissionResult && <p>CO2 Emissions (kg): {emissionResult}</p>}
    </div>
  );
}

export default EmissionForm;
