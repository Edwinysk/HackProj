import React, {useState} from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "../style/form.css";
import headerpic from "../asset/GoEco_-_1.png";

function EmissionForm() {
  const [formData, setFormData] = useState({
    distance: "",
    method: "",
    name: "",
  });

  const fuelConsumption = {
    car: 0.4,
    bike: 0,
    muni: 0.147,
    caltrain: 0.052,
  };

  const [emissionResult] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.method || formData.distance <= 0) {
      toastr.error(
        "Please select a travel method and enter a valid distance.",
        "Validation Error"
      );
      return;
    }

    const emissions = parseFloat(
      calculateEmissions(formData.distance, formData.method)
    );
    const distance = parseFloat(formData.distance);

    const existingEntryIndex = leaderboard.findIndex(
      (entry) => entry.name === formData.name
    );

    if (existingEntryIndex !== -1) {
      const updatedEntry = {...leaderboard[existingEntryIndex]};
      updatedEntry.distance += distance;
      updatedEntry.emissions += emissions;
      setLeaderboard(
        leaderboard.map((entry, index) =>
          index === existingEntryIndex ? updatedEntry : entry
        )
      );
    } else {
      const newEntry = {
        name: formData.name,
        method: formData.method,
        distance: distance,
        emissions: emissions,
      };

      const updatedLeaderboard = [...leaderboard, newEntry];
      setLeaderboard(updatedLeaderboard);
    }

    setLeaderboard((prevLeaderboard) =>
      prevLeaderboard.sort((a, b) => a.emissions - b.emissions)
    );
    toastr.success("Your submission was successful!", "Success");
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
      <div className="logo-container">
        <img
          src={headerpic}
          alt="GoEco Logo"
          className="logo display-4"
          style={{width: "400px", height: "auto"}}
        />
      </div>
      {/* Form display */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <label style={{marginRight: "10px"}}>Distance:</label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            placeholder="Enter distance"
          />
          <p style={{marginLeft: "10px"}}>Miles</p>
        </div>
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
      {emissionResult && <p>CO2 Emissions (g): {emissionResult}</p>}

      {/* Leaderboard display */}
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#Rank</th>
            <th>Username</th>
            <th>Distance Traveled</th>
            <th>CO2 Emissions</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 ? (
            leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.distance} miles</td>
                <td>{entry.emissions} g CO2</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="leaderboard-empty">
                The leaderboard is empty currently. Add something to it!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmissionForm;