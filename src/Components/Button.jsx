import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ButtonStyled = styled.button`
  padding: 2em;
  color: black;
  background-color: red;
  width: 120px;
`;
export default function Button(props) {
  return (
    <div>
      <Link to={props.path}>
        <ButtonStyled type="button">{props.title}</ButtonStyled>
      </Link>
    </div>
  );
}
