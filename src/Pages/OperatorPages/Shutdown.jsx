import React from "react";
import styled from "styled-components";

const ShutdownPage = styled.div`
  background-color: black;
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Shutdown() {
  return (
    <ShutdownPage>
      <h1>Servers are temporarily shutdown</h1>
    </ShutdownPage>
  );
}
