import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: none;
  color: #fff;
  background-color: #000;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 1px solid #000;
  }
`;

const googleSignInStyles = css`
  border: none;
  color: #fff;
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const invertedStyles = css`
  border: 1px solid #000;
  color: #000;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #000;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.googleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  height: 50px;
  min-width: 165px;
  font-size: 15px;
  padding: 0px 35px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;

  ${getButtonStyles}

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
  }
`;
