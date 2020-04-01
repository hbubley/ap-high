import React, { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function A(props) {
  if (props.json) {
    console.log("fetched", props.json.Afpak);
    console.log("fetched", props.json.Afpak.effects.positive);


    const positiveEffects = props.json.Afpak.effects.positive.map((item, index) => {
      return(<div key={index}>
        <p style={{display: 'inline'}}>{item}</p>
      </div>)
    });
    const negativeEffects = props.json.Afpak.effects.negative.map((item, index) => {
      return(<div key={index}>
        <p style={{display: 'inline'}}>{item}</p>
      </div>)
    });
    const medicalEffects = props.json.Afpak.effects.medical.map((item, index) => {
      return(<div key={index}>
        <p style={{display: 'inline'}}>{item}</p>
      </div>)
    });


    return (
      <div className="results">
        <div className="p-title results-context">
          <h1>Agreeableness</h1>
          <h3>{props.personalData}</h3>
          <div className="results-cards">
            <div className="results-card">
    <h2>Afpak: {props.json.Afpak.race}</h2>
    {/* <Carousel activeIndex={index}> */}
              <div className="results-effects">
              <div className="results-positive">
              <h3>Positive Effects:</h3>
             {positiveEffects}
             </div>
             <div className="results-negative">
              <h3>Negative Effects:</h3>
             {negativeEffects}
             </div>
             <div className="results-medical">
              <h3>Medical Effects:</h3>
             {medicalEffects}
             </div>
             </div>

            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>LOADING</h1>;
  }
}
