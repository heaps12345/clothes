import styled from 'styled-components';

export const FormInputGroup = styled.div`
  margin: 45px 0;
  position: relative;
`;

export const FormInputContainer = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  width: 100%;
  color: grey;
  font-size: 18px;
  display: block;
  padding: 10px 10px 10px 5px;

  &:focus {
    outline: none;

    & + label {
      top: -14px;
      font-size: 12px;
      color: black;
    }
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 6px;
  top: 10px;
  color: grey;
  transition: 300ms ease all;
  pointer-events: none;

  &.shrink {
    top: -14px;
    font-size: 12px;
    color: black;
  }
`;
