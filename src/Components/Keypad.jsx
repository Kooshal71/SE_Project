import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";

const Enter = {
  main: "green",
};
const Delete = {
  main: "red",
};

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 40px;
`;

export default function Keypad() {
  return (
    <>
      <DivStyled className="main-section">
        <SectionStyled className="section">
          <Button title="1" path="" />
          <Button title="2" path="" />
          <Button title="3" path="" />
        </SectionStyled>
        <SectionStyled className="section">
          <Button title="4" path="" />
          <Button title="5" path="" />
          <Button title="6" path="" />
        </SectionStyled>
        <SectionStyled className="section">
          <Button title="7" path="" />
          <Button title="8" path="" />
          <Button title="9" path="" />
        </SectionStyled>
        <SectionStyled className="section">
          <ThemeProvider theme={Delete}>
            <Button title="Delete" path="" />
          </ThemeProvider>
          <Button title="0" path="" />
          <ThemeProvider theme={Enter}>
            <Button title="Enter" path="" />
          </ThemeProvider>
        </SectionStyled>
      </DivStyled>
    </>
  );
}

/*

.main-section {
   height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 40px;
}
*/
