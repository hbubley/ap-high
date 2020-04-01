import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import bigFiveQuestions from "./bigFiveQuestions.json"
import Quiz from "./Components/Quiz"
import Header from "./Components/Header"
import Enter from "./Components/Enter"
import E from "./Components/Results/E"
import A from "./Components/Results/A"
import C from "./Components/Results/C"
import N from "./Components/Results/N"
import O from "./Components/Results/O"





export default function App() {

  const [jsonData, setJsonData] = useState()

  useEffect(() => {
    const makeApiCall = async () => {
        const url = `https://strainapi.evanbusse.com/akuuKLy/strains/search/all`
        const res = await fetch(url)
        const json = await res.json()
        setJsonData(json)
        console.log('fetched park info:', jsonData)
        }
    makeApiCall()
  }, [])
  console.log("JSON", jsonData)


  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Enter} />
      <Route exact path ="/quiz" component={Quiz} />
      <Route path ="/quiz/E" render={() => <E json={jsonData} personalData={bigFiveQuestions.personality.Extroversion} />} />
      <Route path ="/quiz/A" render={() => <A json={jsonData} personalData={bigFiveQuestions.personality.Agreeableness} />} />
      <Route path ="/quiz/C" render={() => <C json={jsonData} personalData={bigFiveQuestions.personality.Conscientiousness} />} />
      <Route path ="/quiz/N" render={() => <N json={jsonData} personalData={bigFiveQuestions.personality.Neuroticism} />} />
      <Route path ="/quiz/O" render={() => <O json={jsonData} personalData={bigFiveQuestions.personality.Openness} />} />
    </div>
  );
}

