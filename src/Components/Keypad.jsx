import React from "react";
import Button from "./Button";
export default function Keypad() {
  return (
    <>
      <div className="main-section">
        <div className="section">
          <Button title="1" path="" />
          <Button title="2" path="" />
          <Button title="3" path="" />
        </div>
        <div className="section">
          <Button title="4" path="" />
          <Button title="5" path="" />
          <Button title="6" path="" />
        </div>
        <div className="section">
          <Button title="7" path="" />
          <Button title="8" path="" />
          <Button title="9" path="" />
        </div>
        <div className="section">
          <Button title="Delete" path="" />
          <Button title="0" path="" />
          <Button title="Enter" path="" />
        </div>
      </div>
    </>
  );
}
