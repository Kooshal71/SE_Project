import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";

export default function Home() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <div className="main">
        <button type="button">
          <Link to="/user">User Page</Link>
        </button>
        <button type="button">
          <Link to="/operator">Operator Page</Link>
        </button>
      </div>
    </div>
  );
}
