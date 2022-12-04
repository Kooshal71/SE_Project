import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import MainDiv from "../../Components/MainDiv";
import Heading from "../../Components/Heading";
const DivStyled = styled.div`
  background: linear-gradient(#3e5151, #decba4);
  height: 70vh;
`;

const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 40px;
`;

const Content = () => {
  return (
    <>
      <Heading content="ATM Simulator" />
      <SectionStyled className="main">
        <Button title="User Page" path="/user" />
        <Button title="Operator Page" path="/operator" />
        {/* <Button title="DBMS Project" path="/dbms" /> */}
      </SectionStyled>
    </>
  );
};

export default function Home() {
  return (
    <>
      <MainDiv content={Content()} />
      <DivStyled></DivStyled>
    </>
  );
}
