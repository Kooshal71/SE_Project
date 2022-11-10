import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div>
      <Link to={props.path}>
        <button type="button">{props.title}</button>
      </Link>
    </div>
  );
}
