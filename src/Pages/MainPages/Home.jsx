import React from "react";
import "../../Styles/Home.css";
import styled from "styled-components";
import Button from "../../Components/Button";

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

export default function Home() {
  return (
    <DivStyled>
      <h1>Welcome Page</h1>
      <SectionStyled className="main">
        <Button title="User Page" path="/user" />
        <Button title="Operator Page" path="/operator" />
      </SectionStyled>
    </DivStyled>
  );
}
