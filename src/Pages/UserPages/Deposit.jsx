import React from "react";
import styled from "styled-components";
import Keypad from "../../Components/Keypad";
const Form = styled.form`
  text-align: center;
`;
export default function Deposit() {
  return (
    <>
      <h1>Deposit Page</h1>
      <h1>Form</h1>
      <Form action="">
        <p>This is nice</p>
        <input type="text" />
      </Form>
      <Keypad />
    </>
  );
}
