import React from "react";
import styled from "styled-components";
const H1Styled = styled.h1`
  font-size: 40px;
  text-align: center;
  line-height: 1.5em;
  padding-bottom: 45px;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #111;
  margin-top: 30px;
  &:before {
    background-color: #c50000;
    content: "";
    display: block;
    height: 5px;
    width: 250px;
    margin-bottom: 5px;
  }
  &:after {
    background-color: #c50000;
    content: "";
    display: block;
    right: 0;
    bottom: 0;
    height: 5px;
    width: 250px;
    margin-bottom: 0.25em;
  }
`;
export default function Heading(props) {
  return <H1Styled>{props.content}</H1Styled>;
}
