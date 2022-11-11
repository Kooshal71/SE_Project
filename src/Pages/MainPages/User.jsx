import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/User.css";
import Button from "../../Components/Button";
import styled from "styled-components";

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
  margin: 20px 60px 20px 60px;
`;

function User() {
  return (
    <>
      <h1>User Page</h1>
      <DivStyled className="main-section d-flex justify-content-center flex-column">
        <SectionStyled className="section ">
          <Button path="/user/withdraw" title="Withdraw" />
          <Button path="/user/deposit" title="Deposit" />
        </SectionStyled>
        <SectionStyled className="section ">
          <Button path="/user/transfer" title="Transfer" />
          <Button path="/user/balance" title="Balance" />
        </SectionStyled>
        <SectionStyled className="section">
          <Button path="/user/changePIN" title="Change Pin" />
          <Button path="/user/setPin" title="Set PIN" />
        </SectionStyled>
      </DivStyled>
      <Link to="/">Back to home</Link>
    </>
  );
}

export default User;
