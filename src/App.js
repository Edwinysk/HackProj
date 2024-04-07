import React from "react";
import "./App.css";
import EmissionForm from "./components/Form";
import SMButtons from "./components/SMButtons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EmissionForm />
      </header>
      <footer className="App-footer">
        <div className="container">{/* Footer content goes here */}</div>
        <SMButtons/>
      </footer>
    </div>
  );
}

export default App;