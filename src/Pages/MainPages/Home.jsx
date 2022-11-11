import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";
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
  margin: 40px;
`;

export default function Home() {
  return (
    <DivStyled>
      <h1>Welcome Page</h1>
      <SectionStyled className="main">
        <button type="button">
          <Link to="/user">User Page</Link>
        </button>
        <button type="button">
          <Link to="/operator">Operator Page</Link>
        </button>
      </SectionStyled>
    </DivStyled>
  );
}
