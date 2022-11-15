import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import styled, { ThemeProvider } from "styled-components";
import Heading from "../../Components/Heading";

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(#decba4, #3e5151);
  height: 100vh;
`;

const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 60px 20px 60px;
`;

const Disabled = {
  main: "grey",
};

const LinkStyled = styled(Link)`
  color: #c52225;
  text-align: center;
  font-size: 30px;
`;
function User() {
  return (
    <>
      <DivStyled className="main-section d-flex justify-content-center flex-column">
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
        <LinkStyled to="/">Back to home</LinkStyled>
      </DivStyled>
    </>
  );
}

export default User;
