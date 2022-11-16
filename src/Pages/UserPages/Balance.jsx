import { useState } from "react";
import styled from "styled-components";
import Keypad from "../../Components/Keypad";
import MainDiv from "../../Components/MainDiv";
import SInput from "../../Components/SInput";
import Heading from "../../Components/Heading";
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

export default function Balance() {
  let checkActive = "";
  const [cNum, setcNum] = useState("");
  const [PIN, setPIN] = useState("");
  const [balance, setBalance] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/balance`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cNum, PIN }),
    });
    const res = await response.json();
    setBalance((balance) => (balance = res.balance));
    console.log(balance);
    console.log("You have submitted the form");
  };

  const handleClick = (e) => {
    const num = e.target.value;
    console.log(checkActive);
    if (checkActive === "cNum") {
      if (cNum.length < 16) {
        console.log(e.target.value);
        if (num === "Delete") setcNum((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setcNum((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setcNum((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(`Card Number is ${cNum}`);
    }
    if (checkActive === "PIN") {
      if (PIN.length < 4) {
        console.log(e.target.value);
        if (num === "Delete") setPIN((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setPIN((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setPIN((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(`New Number is ${PIN}`);
    }
  };

  const checkFocus = (e) => {
    console.log(e.target.name);
    const checker = e.target.name;
    if (checker === "cNum") checkActive = "cNum";
    else if (checker === "PIN") checkActive = "PIN";
  };

  const Content = () => {
    return (
      <>
        <Heading content="Balance Page" />
        <StyledForm onSubmit={handleSubmit}>
          <Label htmlFor="cNum" content="Card Number" />
          <SInput
            type="password"
            value={cNum}
            id="cNum"
            name="cNum"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <Label htmlFor="PIN" content="PIN Number" />
          <SInput
            type="password"
            value={PIN}
            id="PIN"
            name="PIN"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <Keypad handleClick={handleClick} />
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
        <h1>{`Current Balance : ${balance}`}</h1>
        <Links to="/user" content="Menu" />
      </>
    );
  };

  // useEffect(() => {});
  return <MainDiv content={Content()} />;
}
