import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/User.css";
import Button from "../../Components/Button";
function User() {
  return (
    <>
      <h1>User Page</h1>
      <div className="main-section d-flex justify-content-center flex-column">
        <div className="section ">
          <Button path="/user/withdraw" title="Withdraw" />
          <Button path="/user/deposit" title="Deposit" />
        </div>
        <div className="section ">
          <Button path="/user/transfer" title="Transfer" />
          <Button path="/user/balance" title="Balance" />
        </div>
        <div className="section">
          <Button path="/user/changePIN" title="Change Pin" />
          <Button path="/user/setPin" title="Set PIN" />
        </div>
      </div>
      <Link to="/">Back to home</Link>
    </>
  );
}

export default User;
