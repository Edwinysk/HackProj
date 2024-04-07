import React, { useState } from "react";
import SMButtons from "./SMButtons";
import EmissionForm from "./EmissionForm";

function ParentComponent() {
  const [emissionData, setEmissionData] = useState({ emissions: "", distance: "" });

  const updateEmissionData = (data) => {
    setEmissionData(data);
  };

  return (
    <div>
      <EmissionForm updateEmissionData={updateEmissionData} />
      <SMButtons emissionData={emissionData} /> {/* Pass emissionData to SMButtons */}
    </div>
  );
}

export default ParentComponent;