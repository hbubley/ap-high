import React, { useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";

export default function A(props) {
  const [step, setStep] = useState(0)
  const increment = () => setStep(step + 1);
  const decrement = () => setStep(step - 1);
  let title = "Agreeableness"
  if (props.json) {
    console.log("fetched", props.json.Afpak);
    console.log("fetched", props.json.Afpak.effects.positive);
    const strains = [props.json["Northern Lights"], props.json.African, props.json.Afwreck]
    const strainNames = ["Northern Lights", "African", "Afwreck"]
    const positiveEffects = strains[step].effects.positive.map(
      (item, index) => {
        return (
          <div key={index}>
            <p style={{ display: "inline" }}>{item}</p>
          </div>
        );
      }
    );
    const negativeEffects = strains[step].effects.negative.map(
      (item, index) => {
        return (
          <div key={index}>
            <p style={{ display: "inline" }}>{item}</p>
          </div>
        );
      }
    );
    const medicalEffects = strains[step].effects.medical.map(
      (item, index) => {
        return (
          <div key={index}>
            <p style={{ display: "inline" }}>{item}</p>
          </div>
        );
      }
    );
    
    return (
      <div className="results">
        <div className="p-title results-context">
          <h1>{title}</h1>
          <h3>{props.personalData}</h3>
          <div className="results-cards">
            <div className="result-card">
              <h2>{strainNames[step]}: {strains[step].race}</h2>
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
                <button onClick={decrement} disabled={step===0? true:false}>Back</button>
                <button onClick={increment} disabled={step===strainNames.length-1 ? true:false}>Next</button>
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

