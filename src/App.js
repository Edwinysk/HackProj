import React, { useState } from 'react';

import Lightbox from './components/Lightbox.jsx';
import "./App.css";
import EmissionForm from "./components/Form";

function App() {

  const [isLightboxOpen, setIsLightboxOpen] = useState(true);

  return (
    <div className="App">
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}>
      </Lightbox>
      <header className="App-header">
        <EmissionForm />
      </header>
      <footer className="App-footer">
        <div className="container">{/* Footer content goes here */}</div>
      </footer>
    </div>
  );
}

export default App;
