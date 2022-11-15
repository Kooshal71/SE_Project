import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ButtonStyled = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 20px 40px;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 40px;
`;
ButtonStyled.defaultProps = {
  theme: {
    main: "#66FCF1",
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
          disabled={props.disabled}
        >
          {props.title}
        </ButtonStyled>
      </Link>
    </div>
  );
}
