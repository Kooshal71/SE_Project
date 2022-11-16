import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Keypad from "../../Components/Keypad";
import Heading from "../../Components/Heading";
import SInput from "../../Components/SInput";
import MainDiv from "../../Components/MainDiv";
import Label from "../../Components/Label";
import Links from "../../Components/Links";
const StyledForm = styled.form`
  text-align: center;
`;
const StyledButton = styled.button`
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
  background-color: green;
`;

export default function Deposit() {
  let checkActive = "";
  const [Pin, setPin] = useState("");
  const [cNum, setcNum] = useState("");
  const [amount, setAmount] = useState("");
  const [finalBalance, setfinal] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";

    const response = await fetch(`${host}/deposit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Pin, cNum, amount }),
    });
    const res = await response.json();
    console.log(res);
    // balance = res.balance;
    setfinal((balance) => (balance = res.finalBalance));
    console.log("You have submitted the form");
  };

  const handleClick = (e) => {
    const num = e.target.value;
    console.log(checkActive);
    if (checkActive === "pin") {
      if (Pin.length < 4) {
        console.log(e.target.value);
        if (num === "Delete") setPin((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setPin((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setPin((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(Pin);
    }
    if (checkActive === "card") {
      if (cNum.length < 16) {
        console.log(e.target.value);
        if (num === "Delete") setcNum((cNum) => cNum.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setcNum((cNum) => cNum + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setcNum((cNum) => cNum.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(`Card Number is ${cNum}`);
    }
    if (checkActive === "amount") {
      if (amount.length < 6) {
        console.log(e.target.value);
        if (num === "Delete") setAmount((amount) => amount.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setAmount((amount) => amount + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setAmount((amount) => amount.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(amount);
    }
  };

  const checkFocus = (e) => {
    console.log(e.target.name);
    const checker = e.target.name;
    if (checker === "PNumber") checkActive = "pin";
    else if (checker === "CNumber") checkActive = "card";
    else if (checker === "amount") checkActive = "amount";
  };

  const Content = () => {
    return (
      <>
        <Heading content="Deposit Page" />
        <StyledForm onSubmit={handleSubmit}>
          <Label htmlFor="Pnumber" content="PIN Number" />
          <br />
          <SInput
            type="password"
            value={Pin}
            id="PNumber"
            name="PNumber"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <Label htmlFor="CNumber" content="Card Number" />
          <br />
          <SInput
            type="password"
            value={cNum}
            id="CNumber"
            name="CNumber"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <Label htmlFor="Amount" content="Amount" />
          <br />
          <SInput
            type="text"
            value={amount}
            id="amount"
            name="amount"
            onFocus={checkFocus}
            readOnly={true}
          />
          <Keypad handleClick={handleClick} />
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
        <h1>{`Final Balance : ${finalBalance}`}</h1>
        <Links to="/user" content="Menu" />
      </>
    );
  };

  return <MainDiv content={Content()} />;
}
