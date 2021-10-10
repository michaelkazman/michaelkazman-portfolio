/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './TopButton.css';

const GoUpEvent = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 30
    || document.documentElement.scrollTop > 30
  ) {
    document.getElementById('topButton').style.opacity = 1;
  } else {
    document.getElementById('topButton').style.opacity = 0;
  }
};

window.onscroll = () => {
  scrollFunction();
};

const onMouseEnter = (color, bgColor) => {
  /* For the button */
  const topButton = document.getElementById('topButton');
  topButton.style.color = color;
  topButton.style.backgroundColor = bgColor;

  /* For arrow icon */
  const arrow = document.getElementById('arrow');
  arrow.style.color = color;
};

const onMouseLeave = (color, bgColor) => {
  /* For the button */
  const topButton = document.getElementById('topButton');
  topButton.style.color = color;
  topButton.style.backgroundColor = bgColor;

  /* For arrow icon */
  const arrow = document.getElementById('arrow');
  arrow.style.color = color;
};

const TopButton = ({ theme }) => (
  <div
    onClick={GoUpEvent}
    id="topButton"
    className="topButton"
    style={{
      color: theme.body,
      backgroundColor: theme.text,
      border: `solid 1px ${theme.text}`,
    }}
    title="Scroll to top"
    onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
    onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
  >
    <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
  </div>
);

export default TopButton;
