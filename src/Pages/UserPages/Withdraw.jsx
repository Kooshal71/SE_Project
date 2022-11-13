import React from "react";
import Form from "../../Components/Form";
import "../../Styles/UserPages/Withdraw.css";
export default function Withdraw() {
  return (
    <div className="withdrawForm">
      <h1>Withdraw Page</h1>
      <Form page={"Withdraw"} />
    </div>
  );
}
