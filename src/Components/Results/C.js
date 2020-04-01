import React from "react";

export default function C(props) {
  return (
    <div className="results">
      <div className="p-title">
        <h1>Conscientiousness</h1>
        <h3>{props.personalData}</h3>
      </div>
    </div>
  );
}
