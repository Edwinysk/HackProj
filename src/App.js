import React from 'react';
import { Tweet } from 'react-twitter-widgets';

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

export default TweetButton;

