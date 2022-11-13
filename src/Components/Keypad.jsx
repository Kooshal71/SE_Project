import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";

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

export default function Keypad(props) {
  return (
    <>
      <DivStyled className="main-section">
        <SectionStyled className="section">
          <Button title="1" path="" handleClick={props.handleClick} />
          <Button title="2" path="" handleClick={props.handleClick} />
          <Button title="3" path="" handleClick={props.handleClick} />
        </SectionStyled>
        <SectionStyled className="section">
          <Button title="4" path="" handleClick={props.handleClick} />
          <Button title="5" path="" handleClick={props.handleClick} />
          <Button title="6" path="" handleClick={props.handleClick} />
        </SectionStyled>
        <SectionStyled className="section">
          <Button title="7" path="" handleClick={props.handleClick} />
          <Button title="8" path="" handleClick={props.handleClick} />
          <Button title="9" path="" handleClick={props.handleClick} />
        </SectionStyled>
        <SectionStyled className="section">
          <ThemeProvider theme={Delete}>
            <Button title="Delete" path="" handleClick={props.handleClick} />
          </ThemeProvider>
          <Button title="0" path="" handleClick={props.handleClick} />
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
