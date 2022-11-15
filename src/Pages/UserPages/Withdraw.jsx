import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Keypad from "../../Components/Keypad";

const StyledInput = styled.input`
  -webkit-text-security: disc;
  text-security: disc;
`;
const StyledForm = styled.form`
  text-align: center;
`;

export default function Withdraw() {
  let checkActive = "";
  const [Pin, setPin] = useState("");
  const [cNum, setcNum] = useState("");
  const [amount, setAmount] = useState("");
  const [finalBalance, setbalance] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";

    const response = await fetch(`${host}/withdraw`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Pin, cNum, amount }),
    });
    const res = await response.json();
    setbalance((balance) => (balance = res.finalBalance));
    console.log(res);
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

  return (
    <div className="withdrawForm">
      <div>
        <h1>Withdraw Page</h1>
        {console.log(Pin)}
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="Pnumber">PIN Number</label>
          <StyledInput
            type="password"
            value={Pin}
            id="PNumber"
            name="PNumber"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <label htmlFor="CNumber">Card Number</label>
          <StyledInput
            type="password"
            value={cNum}
            id="CNumber"
            name="CNumber"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <label htmlFor="Amount">Amount</label>
          <StyledInput
            type="text"
            value={amount}
            id="amount"
            name="amount"
            onFocus={checkFocus}
            readOnly={true}
          />
          <Keypad handleClick={handleClick} />
          <button type="submit">Submit</button>
        </StyledForm>
      </div>
      <h1>{`Final Balance : ${finalBalance}`}</h1>
      <Link to="/user">Menu</Link>
    </div>
  );
}
