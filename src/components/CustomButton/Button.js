
import styled from 'styled-components'

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 54px;
  letter-spacing: 0.5px;
  line-height: 48px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${props => props.white ? "white" : "black"};
  color: ${props => props.white ? "black" : "white"};
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: 2px solid black;
  cursor: pointer;
  display: block;
  margin: 20px 0;

  &:hover {
    background-color:  ${props => props.white ? "black" : "white"};
    color:  ${props => props.white ? "white" : "black"};
    border: 2px solid black;
  }
`
