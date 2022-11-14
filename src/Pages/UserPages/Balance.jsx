import { useState } from "react";
import styled from "styled-components";
import Keypad from "../../Components/Keypad";
import { Link } from "react-router-dom";
const StyledInput = styled.input`
  -webkit-text-security: disc;
  text-security: disc;
`;
const StyledForm = styled.form`
  text-align: center;
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
  // useEffect(() => {});
  return (
    <div className="withdrawForm">
      <h1>Balance Page</h1>
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
            value={PIN}
            id="PIN"
            name="PIN"
            onFocus={checkFocus}
            readOnly={true}
          />
          <br />
          <Keypad handleClick={handleClick} />
          <button type="submit">Submit</button>
        </StyledForm>
      </div>
      <h1>{`Current Balance : ${balance}`}</h1>
      <Link to="/user">Menu</Link>
    </div>
  );
}
