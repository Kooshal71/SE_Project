import React from "react";
import { useState } from "react";
import Keypad from "./Keypad";
const styles = {
  body: {
    backgroundColor: "000",
  },
};

export default function Form() {
  const [Pin, setPin] = useState("");
  function handleSubmit() {
    console.log("You have submitted the form");
  }
  function handleClick() {
    console.log("Hello");
  }
  return (
    <div style={styles.body}>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="password" onChange={handleClick} />
        <Keypad />
      </form>
    </div>
  );
}
