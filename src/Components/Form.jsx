import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Keypad from "./Keypad";
const StyledInput = styled.input`
  -webkit-text-security: disc;
  text-security: disc;
`;
const StyledForm = styled.form`
  text-align: center;
`;
export default function Form() {
  const [Pin, setPin] = useState(123);
  function handleSubmit() {
    console.log("You have submitted the form");
  }
  return (
    <div>
      <h1>Form</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="password" />
        <Keypad />
      </StyledForm>
    </div>
  );
}
