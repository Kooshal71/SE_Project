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
    main: "blue",
  },
};
export default function Button(props) {
  return (
    <div>
      <Link to={props.path}>
        <ButtonStyled
          type="button"
          onClick={props.handleClick}
          value={props.title}
        >
          {props.title}
        </ButtonStyled>
      </Link>
    </div>
  );
}
