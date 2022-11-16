import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";
import MainDiv from "../../Components/MainDiv";
import { useNavigate } from "react-router-dom";
function Operator() {
  const navigate = useNavigate();

  const Content = () => {
    return (
      <>
        <Heading content="Operator Page"></Heading>
        <Link to="/">Back to Home</Link>
        <form onSubmit={handleClick}>
          <button type="submit">Shutdown</button>
        </form>
      </>
    );
  };

  const handleClick = async (e) => {
    console.log("WTF");
    e.preventDefault();
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/shutdown`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(`Shutdown was ${res.reply}`);
    navigate("/shutdown");
  };

  return <MainDiv content={Content()} />;
}

export default Operator;
