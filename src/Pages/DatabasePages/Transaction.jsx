import React from "react";
import MainDiv from "../../Components/MainDiv";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
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
      <Heading content="Transaction Page" />
      <SectionStyled>
        <Button title="Insert" />
        <Button title="Update" />
        <Button title="Delete" />
      </SectionStyled>
    </>
  );
};

export default function Transaction() {
  return <MainDiv content={Content()} />;
}
