import { useState } from "react";
import styled from "styled-components";
import Keypad from "../../Components/Keypad";
import Links from "../../Components/Links";
import MainDiv from "../../Components/MainDiv";
import SInput from "../../Components/SInput";
import Heading from "../../Components/Heading";
import Label from "../../Components/Label";
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

export default function Transfer() {
  let checkActive = "";
  const [cNum1, setcNum1] = useState("");
  const [cNum2, setcNum2] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/transfer`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cNum1, cNum2, amount }),
    });
    const res = await response.json();
    console.log(res);
    console.log("You have submitted the form");
  };

  const handleClick = (e) => {
    const num = e.target.value;
    console.log(checkActive);
    if (checkActive === "cNum1") {
      if (cNum1.length < 16) {
        console.log(e.target.value);
        if (num === "Delete") setcNum1((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setcNum1((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setcNum1((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(`Card Number is ${cNum1}`);
    }
    if (checkActive === "cNum2") {
      if (cNum2.length < 16) {
        console.log(e.target.value);
        if (num === "Delete") setcNum2((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setcNum2((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setcNum2((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(`New Number is ${cNum2}`);
    }
    if (checkActive === "amount") {
      if (amount.length < 6) {
        console.log(e.target.value);
        if (num === "Delete") setAmount((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setAmount((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setAmount((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
    }
  };

  const checkFocus = (e) => {
    console.log(e.target.name);
    const checker = e.target.name;
    if (checker === "cNum1") checkActive = "cNum1";
    else if (checker === "cNum2") checkActive = "cNum2";
    else if (checker === "amount") checkActive = "amount";
  };
  // useEffect(() => {});

  const Content = () => {
    return (
      <>
        <Heading content="Transfer Page" />
        {console.log(cNum1)}
        <StyledForm onSubmit={handleSubmit}>
          <Label htmlFor="cNum1" content="Sender Card Number" />
          <SInput
            type="password"
            value={cNum1}
            id="cNum1"
            name="cNum1"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <Label htmlFor="cNum2" content="Receiver Card Number" />
          <SInput
            type="password"
            value={cNum2}
            id="cNum2"
            name="cNum2"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <Label htmlFor="amount" content="Amount" />
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
        <Links to="/user" content="Menu" />
      </>
    );
  };

  return <MainDiv content={Content()} />;
}
