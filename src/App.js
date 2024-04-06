import React, { Component } from 'react';
import './App.css';
import EmissionForm from './components/Form'; 
import { Tweet } from 'react-twitter-widgets';
import { Helmet } from 'react-helmet';
import { FacebookShareButton, FacebookIcon } from 'react-share';

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
      </div>
    );
  }
}

const TweetButton = () => {
  const tweetText = "Check out this awesome tweet!"; // Set your tweet text here
  
  return (
    <div>
      <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`)}>
        Tweet
      </button>
    </div>
  );
};

const FacebookShare = ({ url, quotes, hashtag }) => {
  return (
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round />
      Share on Facebook
    </FacebookShareButton>
  );
};

export default App;