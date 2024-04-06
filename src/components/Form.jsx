import React, {useState} from "react";

function EmissionForm() {
  const [formData, setFormData] = useState({
    distance: "",
    // to: "",
    method: "",
  });
  
  const fuelConsumption = {
    car: 0.4, 
    bike: 0,
    muni: 0.147,
    caltrain: 0.052
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
    const emissions = calculateEmissions(formData.distance, formData.method);
    setEmissionResult(emissions);

    console.log(formData);
  };

  const calculateEmissions = (distance, method) => {
    const kgPerGallon = 8.89;
    let CO2EmissionsKg;
  
    if (method === "bike") {
      CO2EmissionsKg = 0;
    } else {
      const gallonsPerMile = fuelConsumption[method];
      CO2EmissionsKg = distance * gallonsPerMile * kgPerGallon;
    }
    
    return CO2EmissionsKg.toFixed(3);
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
            <option value="car">Car</option>
            <option value="bike">Bike / Walk</option>
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
