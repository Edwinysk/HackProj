import React from 'react';
import { FacebookShareButton } from 'react-share';
import styled from 'styled-components';

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
    text: "white",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: ${(props) => theme[props.theme].text};
  padding: 10px 20px; /* Symmetrical padding */
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  font-family: Arial, sans-serif; /* Match font with Twitter button */
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const FacebookButton = styled(Button)`
  /* Match styles with Twitter button */
`;

function SMButton() {
  const tweetText = "I just measured my carbon transport footprint!  Can you beat me?  Try at goecosf.com";

  return (
    <div>
      <Button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`)} theme="blue">
        Share your emissions saved on Twitter!
      </Button>
      <FacebookShareButton url="https://example.com">
        <FacebookButton theme="blue">
          Tell your friends on Facebook!
        </FacebookButton>
      </FacebookShareButton>
    </div>
  );
}

export default SMButton;