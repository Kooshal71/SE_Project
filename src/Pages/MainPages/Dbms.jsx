import React from "react";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";
import MainDiv from "../../Components/MainDiv";
import styled from "styled-components";
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
      <Heading content="ATM Database" />
      <SectionStyled>
        <Button title="Card Table" path="/dbms/card" />
        <Button title="Client Table" path="/dbms/client" />
        <Button title="Balance Table" path="/dbms/balance" />
        <Button title="Transaction Table" path="/dbms/transaction" />
      </SectionStyled>
    </>
  );
};

export default function Dbms() {
  return <MainDiv content={Content()} />;
}
