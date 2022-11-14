import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Keypad from "../../Components/Keypad";

const StyledInput = styled.input`
  -webkit-text-security: disc;
  text-security: disc;
`;
const StyledForm = styled.form`
  text-align: center;
`;

export default function SetPIN() {
  let navigate = useNavigate();
  let checkActive = "";
  const [cNum, setcNum] = useState("");
  const [newPIN, setnewPIN] = useState("");
  const [confirmPIN, setconfirmPIN] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";
    if (newPIN === confirmPIN) {
      const response = await fetch(`${host}/setPIN`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cNum, newPIN, confirmPIN }),
      });
      const res = await response.text();
      console.log(res);
      console.log("You have submitted the form");
      navigate("/user");
    } else console.log("The PINS do not match");
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
    if (checkActive === "newPIN") {
      if (newPIN.length < 4) {
        console.log(e.target.value);
        if (num === "Delete") setnewPIN((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setnewPIN((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setnewPIN((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(`New Number is ${newPIN}`);
    }
    if (checkActive === "confirmPIN") {
      if (confirmPIN.length < 4) {
        console.log(e.target.value);
        if (num === "Delete") setconfirmPIN((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
        else if (0 <= num <= 9) setconfirmPIN((Pin) => Pin + num);
        else console.log("WTF is happening");
      } else {
        if (num === "Delete") setconfirmPIN((Pin) => Pin.slice(0, -1));
        else if (num === "Enter") handleSubmit();
      }
      console.log(`confirm Number is ${confirmPIN}`);
    }
  };

  const checkFocus = (e) => {
    console.log(e.target.name);
    const checker = e.target.name;
    if (checker === "cNum") checkActive = "cNum";
    else if (checker === "NPIN") checkActive = "newPIN";
    else if (checker === "CPIN") checkActive = "confirmPIN";
  };

  return (
    <div className="withdrawForm">
      <h1>Change PIN Page</h1>
      <div>
        {console.log(cNum)}
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="cNum">Card Number</label>
          <StyledInput
            type="password"
            value={cNum}
            id="cNum"
            name="cNum"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <label htmlFor="NPIN">New PIN Number</label>
          <StyledInput
            type="password"
            value={newPIN}
            id="NPIN"
            name="NPIN"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <label htmlFor="CPIN">Confirm PIN Number</label>
          <StyledInput
            type="text"
            value={confirmPIN}
            id="CPIN"
            name="CPIN"
            onFocus={checkFocus}
            readOnly={true}
          />
          <Keypad handleClick={handleClick} />
          <button type="submit">Submit</button>
        </StyledForm>
      </div>
    </div>
  );
}
