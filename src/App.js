import React, { Component } from 'react';
import './App.css';
import EmissionForm from './components/Form';
import SMButtons from './SMButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: 'Default Title' // Default value for the article title
      }
    };
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Helmet>
            <title>{this.state.article.title}</title>
            <meta name="description" content="Measure your carbon footprint!" />
          </Helmet>
          <EmissionForm />

        </header>
        <SMButtons 
        url="https://example.com" // URL you want to share
        text="Check out this awesome content!" // Text you want to share
        />
      </div>
    );
  }
}

export default App;
