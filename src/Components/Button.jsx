import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ButtonStyled = styled.button`
  padding: 2em;
  color: black;
  background-color: ${(props) => props.theme.main};
  width: 120px;
  margin: 10px;
`;
ButtonStyled.defaultProps = {
  theme: {
    main: "#FFF000",
  },
};
export default function Button(props) {
  return (
    <div>
      <Link to={props.path}>
        <ButtonStyled
          onClick={props.handleClick}
          value={props.title}
          type={props.type}
        >
          {props.title}
        </ButtonStyled>
      </Link>
    </div>
  );
}
