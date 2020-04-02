import React, { useState } from "react";
import bigFiveQuestions from "../bigFiveQuestions.json";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
export default function Quiz() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [answerArray, setAnswerArray] = useState([]);
  let result;

  const handleChange = e => {
    let userInput = e.target.value
    setInput(userInput);

  };
  const handleSubmit = () => {
    setAnswerArray([...answerArray, input]);
    setInput('');
    increment();
  };
  const calculateResults = () => {
    let E = parseInt(answerArray[4]) - parseInt(answerArray[0]);
    let A = parseInt(answerArray[1]) - parseInt(answerArray[6]);
    let C = parseInt(answerArray[7]) - parseInt(answerArray[2]);
    let N = parseInt(answerArray[8]) - parseInt(answerArray[3]);
    let O = parseInt(answerArray[9]) - parseInt(answerArray[4]);
    let resultArray = { E: E, A: A, C: C, N: N, O: O };

    result = Object.keys(resultArray).reduce((a, b) =>
      resultArray[a] > resultArray[b] ? a : b
    );

    console.log("RESULT", result);
    return result;
  };
  calculateResults();
  console.log("INPUT", input);

  let answers = bigFiveQuestions.answers.map((answerOption, index) => {
    console.log("Disappoint", input)
    return (
      <label
        className="answer btn btn-md mb-2"
        key={index}
        value={input}
      >
        <input
          value={index + 1}
          key={step}    
          type="radio"
          name={input}
          onChange={handleChange}
          disabled= {step <= 9 ? false : true}
        />
        <span className="answer-text">{answerOption}</span>
      </label>
    );
  });

  const increment = () => setStep(step + 1);
  const decrement = () => setStep(step - 1);
  let percent = (step / 9) * 100;

const handleButtons = () => {if(step <= 9){
    return(<button
      className="quiz-button"
      disabled = {input ? false : true}
      onClick={handleSubmit}
    >
      NEXT
    </button>)
  }
  else if(step === 10 ) {
    return(  <Link to={`/quiz/${result}`}>
    <button
      className="quiz-button"
      onClick={handleSubmit}
    >
      Take a Hit!
    </button>
  </Link>)
  }}

  return (
    <section className="quiz">
      <div className="quiz-question">
        <h1>
          I see myself as someone who
          <span>{bigFiveQuestions.questions[step]}</span>
        </h1>
        <div className="options">{answers}</div>
        <div className="result-button-div">
          {handleButtons()}
          {/* <button
            className="quiz-button"
            onClick={handleSubmit}
            disabled={input && step <= 9 ? false : true}
          >
            NEXT
          </button> */}
          {/* <Link to={`/quiz/${result}`}>
            <button
              className="quiz-button"
              onClick={handleSubmit}
              disabled={step === 10 ? false : true}
            > */}
              {/* Take a Hit!
            </button> */}
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
}
