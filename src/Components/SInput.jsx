import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 20px;
  margin: 20px;
  border-radius: 9999em;
  width: 400px;
  border: 5px solid black;
`;

export default function SInput(props) {
  return (
    <div>
      <StyledInput
        type={props.type}
        name={props.name}
        id={props.id}
        onFocus={props.onFocus}
        readOnly={props.readOnly}
        value={props.value}
      />
    </div>
  );
}
