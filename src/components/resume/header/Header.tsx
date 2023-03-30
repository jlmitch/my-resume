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
    font-size: 35px;
    text-transform: uppercase;

    & .last-name {
      color: #000;
      font-weight: 700;
      margin-left: 8px;
    }

    /* Small devices such as large phones (640px and up) */
    @media only screen and (min-width: 40em) {
      font-size: 44px;
    }
  }

  & .contact-info {
    color: #4975C5;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 0;

    & .linked-in-link {
      color: #4975C5;
      margin-top: 20px;
    }

    & .spacer {
      display: none;
    }

    /* Small devices such as large phones (640px and up) */
    @media only screen and (min-width: 40em) {
      display: flex;
      flex-direction: row;
      margin-top: 8px;

      & .linked-in-link {
        color: #4975C5;
        margin: 0;
      }

      & .spacer {
        display: block;
        font-size: 47px;
        margin: 0 8px;
      }
    }
  }

  & .contact-info.small-view {
    display: flex;
    flex-direction: column;
    margin: 25px 0;

    & .linked-in-link {
      margin-top: 20px;
    }

    & .spacer {
      display: none;
    }
  }

  & .description {
    color: #000;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    line-height: 22px;
    padding: 0 20px;
    
    /* Small devices such as large phones (640px and up) */
    @media only screen and (min-width: 40em) {
      margin-top: 8px;
    }
  }

  & .description.small-view {
    padding: 0 20px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <div className="header">
      Joshua <span className="last-name">Mitchell</span>
    </div>

    <div className="contact-info">
      <div>jmitchell.dev@gmail.com</div>

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
