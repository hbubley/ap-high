import React from "react";

export default function E(props) {
  return (
    <div className="results">
        <div className="p-title">
          <h1>Extroversion</h1>
          <h3>{props.personalData}</h3>
        </div>
    </div>
  );
}
