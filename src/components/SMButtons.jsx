// In SMButton.jsx

import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import { FacebookShareButton } from 'react-share';
import styled from 'styled-components';

const theme = {
  blue: {
    default: "#3f51b5",
    light: "#9fa8da", // lighter shade of blue
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Space = styled.div`
  margin-top: 20px; /* Adjust top margin */
`;

function SMButtons({ emissionData }) { // Receive emissionData as a prop
  const tweetText = `I saved ${emissionData.emissions} grams of carbon dioxide by traveling ${emissionData.distance} miles! Can you beat me? Record your alternate transport methods at ecosf.com`;

  return (
    <ButtonContainer>
      <Space />
      <Button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`)} theme="blue">
        Share your emissions saved on Twitter!
      </Button>
      <div style={{ margin: '10px 0' }}></div>
      <FacebookShareButton url="https://example.com">
        <FacebookButton theme="blue">
          Tell your friends on Facebook!
        </FacebookButton>
      </FacebookShareButton>
    </ButtonContainer>
  );
}

export default SMButtons;