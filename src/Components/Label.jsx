import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 35px;
  color: #3e5151;
`;

export default function Label(props) {
  return <StyledLabel htmlFor={props.for}>{props.content}</StyledLabel>;
}
