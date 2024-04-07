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
    car: 0,
    bike: 0.4,
    muni: 0.147,
    bart: 0.052,
  };

  const [emissionResult] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [sortOrder] = useState("des");

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
  };

    setLeaderboard((prevLeaderboard) => {
      const isAscending = sortOrder === "asc";
      const sortedLeaderboard = prevLeaderboard.sort((a, b) => {
        const sortVal = a.emissions - b.emissions;
        return isAscending ? sortVal : -sortVal;
      });
      return [...sortedLeaderboard];
    });

  toastr.success("Your submission was successful!", "Success");
}

const calculateEmissions = (distance, method) => {
  const gramPerGallon = 8890;
  let CO2EmissionsGram;

  if (method === "car") {
    CO2EmissionsGram = 0;
  } else {
    const gallonsPerMile = fuelConsumption[method];
    CO2EmissionsGram = distance * gallonsPerMile * gramPerGallon;
  }

  return CO2EmissionsGram.toFixed(3);
};

  return (
    <div>
      <div className="logo-container">
        <img
          src={headerpic}
          alt="GoEco Logo"
          className="logo display-4"
          style={{width: "700px", height: "auto"}}
        />
      </div>

    {/* Form display*/}
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="text-black">
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-control"
                id="nameInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="distanceInput" className="form-label">
                Distance:
              </label>
              <input
                type="number"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                placeholder="Enter distance in miles"
                className="form-control"
                id="distanceInput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="methodSelect" className="form-label">
                Transportation Method:
              </label>
              <select
                name="method"
                value={formData.method}
                onChange={handleChange}
                className="form-control"
                id="methodSelect">
                <option value="">Select your travel method</option>
                <option value="car">Fuel Car</option>
                <option value="bike">Bike / Walk</option>
                <option value="muni">Muni</option>
                <option value="bart">Bart</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {emissionResult && (
              <p className="emission-result">
                CO2 Emissions (g): {emissionResult}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>

      {/* Leaderboard display */}
      <h2 style={{marginTop: "220px"}} className="leaderboard-title">Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#Rank |</th>
            <th>Name |</th>
            <th>Distance Traveled |</th>
            <th>CO2 Emissions Saved</th>
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
                The leaderboard is currently empty. Add something to it!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmissionForm;
