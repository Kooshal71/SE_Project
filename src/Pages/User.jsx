import React from "react";
import { Link } from "react-router-dom";
import "../Styles/User.css";

function User() {
  return (
    <>
      <h1>User Page</h1>
      <div className="main-section d-flex justify-content-center flex-column">
        <div className="section ">
          <button type="button">Withdraw</button>
          <button type="button">Deposit</button>
        </div>
        <div className="section ">
          <button type="button">Set Pin</button>
          <button type="button">Transfer</button>
        </div>
        <div className="section">
          <button type="button">Change PIN</button>
          <button type="button">Check Balance</button>
        </div>
      </div>
      <Link to="/">Back to home</Link>
    </>
  );
}

export default User;
