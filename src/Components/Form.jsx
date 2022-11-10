import React from "react";
import { useState } from "react";
import Button from "./Button";

const styles = {
  body: {
    backgroundColor: "000",
  },
};

export default function Form() {
  const [Pin, setPin] = useState(0);
  return (
    <div style={styles.body}>
      <h1>Form</h1>
      <form action="">
        <input type="password" />
        <div>{Pin}</div>
      </form>
    </div>
  );
}
