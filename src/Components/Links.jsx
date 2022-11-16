import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const LinkStyled = styled(Link)`
  color: #c52225;
  text-align: center;
  font-size: 30px;
`;
export default function Links(props) {
  return <LinkStyled to={props.to}>{props.content}</LinkStyled>;
}
