import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
    transition: ease-out 0.6s;
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: ease-in 0.4s;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
