# Project Overview
![Image description](https://media.tenor.com/images/afdd108e2e6b46fd825a66e1b92dc87e/tenor.gif)

## Project Links

- [github repo link](https://github.com/hbubley/ap-high)
- [Deployment link](https://ap-high.netlify.com/)

## Project Description

I will be building a health survey application involving a question display and response collection UI.  Responses would need to update application state to in order to support results pages.
I will most likely be using some form of storage, either local or to another API. 

### Brainstorm:
-RESEARCH BEFORE ARCHITECTURE:

- [Local storage with useEffect hoook](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14384908#overview)
- useReduce
- Could I have the original json saved as a state and alter it to save the user's answer by adding an answer value?
- step function to take questions forward and back
- state conatiaining all the questions, state containing answers and questions, state handling step forward and back.
- pull from json and then api
- button that only appears after state containing questionss and answers is equal in length to the state/list containing all the questions. 
- post answers back to api after each submit to render results page

#### Steps

##### comp1 (PARENT)

- ROUTE
- take data from api/json and map over it to get individual questions
- in object, have key that says hasAnswered = false, switches to true when user answers. (possibly a state?)

##### comp1a (CHILD OF COMP 1)

- map over individual questions in order to get all possible answers to appear as radio buttons
- toggle hasAnswered state when user clicks an input
- when the key hasAnswered = true, show 'next' button

##### comp1b (CHILD OF COMP 1)

- update state pushing quesiton id, question answer, and index into an array handled by state. Use local storage?
- give state ability to work next, previous, and submit buttons

##### comp2

- ROUTE
- takes user to updated results page

#### STATES

##### [userAnswer, setUserAnswer] = useState[{question}:{answer}]

##### [step, setStep] = useState[{index}]

##### [hasAnswered, setHasAnswered] = [false]

``` HTML
- if hasAnswered === [true]{
    push index to step state
}
- if step.length === userAnswer.length{
    enable next button
}

- const increment = () => setStep(push(index));

- <button onClick={increment} disabled={(step.length === userAnswer.length && hasAnswered===true) ? false : true}>
```

- when user answers a question, store question answer key to user answer. When hasAnswered === true, (toggle hook) user has the ability to go to the next question. 
- useEffect for local storage will update whenever userAnswer has changed. 


## API
http://strains.evanbusse.com/



```
{data: { 
{
    "Afpak": {
        "id": 1,
        "race": "hybrid",
        "flavors": [
            "Earthy",
            "Chemical",
            "Pine"
        ],
        "effects": {
            "positive": [
                "Relaxed",
                "Hungry",
                "Happy",
                "Sleepy"
            ],
            "negative": [
                "Dizzy"
            ],
            "medical": [
                "Depression",
                "Insomnia",
                "Pain",
                "Stress",
                "Lack of Appetite"
            ]
        }
    },

}}
```

## Architecture

- [Link to my react architecture](https://files.slack.com/files-pri/T0351JZQ0-F01129GNVUL/img_0107.jpg)


### MVP/PostMVP - 5min

#### MVP
- Find and use external api
- Render data on page
- Allow user to interact with the page
- Form that updates an array of data using state, pushing user input into array
- Work with API to print necessary information
- limit results on page

#### PostMVP 

- Add CSS Effects to make Monkey look smokey
- Disable input options on last question
- Get radio button to clear after each answer input

