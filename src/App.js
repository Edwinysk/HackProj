import React, { useState } from 'react';
import './App.css';

function App() {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState('');

  const enqueue = () => {
    if (input) {
      setQueue([...queue, input]);
      setInput(''); // Clear input after enqueue
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple Queue System</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={enqueue}>Enqueue</button>
        <button onClick={dequeue} disabled={queue.length === 0}>
          Dequeue
        </button>
        <h4>Queue:</h4>
        <ul>
          {queue.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
