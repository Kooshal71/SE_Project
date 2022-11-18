import React from "react";
import styled from "styled-components";
const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(#decba4, #3e5151);
  height: 100vh;
`;

export default function MainDiv(props) {
  return <DivStyled>{props.content}</DivStyled>;
}
