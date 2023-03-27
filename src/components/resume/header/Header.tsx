import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;

  & .header {
    color: #595959;
    display: flex;
    align-items: center;
    font-family: 'Georgia';
    font-size: 44px;
    text-transform: uppercase;

    & .last-name {
      color: #000;
      font-weight: 700;
      margin-left: 8px;
    }
  }

  & .contact-info {
    color: #4975C5;
    display: flex;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 8px;

    & .linked-in-link {
      color: #4975C5;
    }

    & .spacer {
      font-size: 47px;
      margin: 0 8px;
    }
  }

  & .description {
    color: #000;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    line-height: 22px;
    margin-top: 8px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <div className="header">
      Joshua <span className="last-name">Mitchell</span>
    </div>

    <div className="contact-info">
      <div>(912) 674-3761</div>

      <span className="spacer">&#183;</span>

      <div>jlmitchwd@gamil.com</div>

      <span className="spacer">&#183;</span>

      <a
        className="linked-in-link"
        href="https://www.linkedin.com/in/joshualeemitchell"
        target="_blank"
        rel="noopener noreferrer">
          www.linkedin.com/in/joshualeemitchell
      </a>
    </div>

    <div className="description">
      Seeking a challenging frontend software engineer role in an organization where
      I can make a significant contribution using my talents and skills.
    </div>
  </HeaderContainer>
);

export default Header;
