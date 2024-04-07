import React from "react";
import "./App.css";
import EmissionForm from "./components/Form";
import Skyline from "./components/Skyline";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EmissionForm />
      </header>
      <footer className="App-footer">
        <div className="container"></div><Skyline/>
      </footer>
    </div>
  );
}

export default App;
