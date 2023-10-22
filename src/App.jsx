import { useState, useEffect } from "react";
import "./App.css";
import Questions from "./Questions.json";

function App() {
  // console.log(Questions);
//   let index = correct_index;
  let [ans, setAns] = useState("");
  let [allQues, setAllQues] = useState(Questions);
  let [id, setid] = useState(0);
  let [correct, setCorrect] = useState(0);
  let [inCorrect, setInCorrect] = useState(0);
  let [result, setResult] = useState(false);

  let [countDown, setCountDown] = useState(30);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countDown === 0) {
        clearInterval(intervalId);
      } else {
        setCountDown(countDown--);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDown]);

  // let [result, setResult] = useState("");
  // const [options, setoptions] = useState(0);

  const selectOP = (op) => {
    if (q.answre === op) {
      setAns((ans = "Correct"));
      setCorrect(++correct)
    } else {
      setAns((ans = "Incorrect"));
      setInCorrect(++inCorrect)
    }
  };

  const nextQues = () => {
    setid(id + 1);
    setAns((ans = ""));

    if (q.id === allQues.length) {
      setResult((result = true));
    }
  };

const tryAgain = () => {
   setid(id = 0)
   setResult(result = false)
}

  let q = allQues[id];

  return (
    <>
      {result ? (
        <div className="quiz-container">
        <h1>Result</h1>
        <p>Total Score : {((correct / allQues.length) * 100)} % </p>
        <p>Correct: { correct } </p>
        <p>InCorrect: { inCorrect } </p>
    <button className="Tryagain"  onClick={tryAgain}  >
    TRY AGAIN
    </button>
    
        </div>
      ) : (
        <>
          <div className="my project">
            <div className="quiz-container">
              <div className="f_btns">
                <button id="timer-button">{countDown}s</button>
                <button id="slide-button">{q.id}/10</button>
              </div>

              <h1>
                Dodging tables <span>BETWEEN</span> 2 to 10{" "}
              </h1>
              <h2>
                <p id="questions">
                  {" "}
                  Q{q.id}. {q.ques}{" "}
                </p>
              </h2>
              <ul id="choices">
                {q.options.map((op, i) => (
                  <li onClick={() => selectOP(op)}>
                    <input
                      type="radio"
                      name="choice"
                      value={op}
                      className={`${op === q.answre ? "correct" : "inCorrect"}`}
                    />
                    {op}
                  </li>
                ))}
              </ul>
              <button className="next-button" onClick={nextQues}>
                Next
              </button>
              <b> {ans} </b>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
