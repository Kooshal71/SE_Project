import React from "react";
import Button from "../../Components/Button";
import styled, { ThemeProvider } from "styled-components";
import Heading from "../../Components/Heading";
import Links from "../../Components/Links";
import MainDiv from "../../Components/MainDiv";

const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 60px 20px 60px;
`;

const DivStyled = styled.div`
  background: linear-gradient(#3e5151, #decba4);
  height: 40vh;
`;

const Disabled = {
  main: "grey",
};

const Content = () => {
  return (
    <>
      <Heading content="User Page" />
      <SectionStyled className="section ">
        <Button path="/user/withdraw" title="Withdraw" />
        <Button path="/user/deposit" title="Deposit" />
      </SectionStyled>
      <SectionStyled className="section ">
        <ThemeProvider theme={Disabled}>
          <Button path="/user/transfer" title="Transfer" disabled={false} />
        </ThemeProvider>
        <Button path="/user/balance" title="Balance" />
      </SectionStyled>
      <SectionStyled className="section">
        <Button path="/user/changePIN" title="Change Pin" />
        <Button path="/user/setPin" title="Set PIN" />
      </SectionStyled>
      <Links to="/" content="Back to home" />
    </>
  );
};

function User() {
  return (
    <>
      <MainDiv content={Content()} />
      <DivStyled></DivStyled>
    </>
  );
}

export default User;
