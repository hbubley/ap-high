import React, {useState} from 'react'

export default function O(props) {
    const [step, setStep] = useState(0)
    const increment = () => setStep(step + 1);
    const decrement = () => setStep(step - 1);
    let title = "Openness"
    if (props.json) {
      const strains = [props.json["OG Kush"], props.json["Jet Fuel"], props.json.Chemdawg, props.json.Gelato, props.json["Blue Dream"]]
      const strainNames = ["OG Kush", "Jet Fuel", "ChemDawg", "Gelato", "Blue Dream"]
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
      return <h1>LOADING</h1>
    }
}
