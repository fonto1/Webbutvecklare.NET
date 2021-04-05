import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLinks() {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/NewIssuePage">
        <i className="fas fa-plus plus"></i>
      </Link>
    </div>
  );
}
