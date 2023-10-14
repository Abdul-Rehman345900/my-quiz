import { useState } from 'react';
import './App.css';
import data from './data.json'

function App() {
  return (
    <body>


      <div className="quiz-container">
        <div className="f_btns">

          <button id="timer-button">30s</button>
          <button id="slide-button">1/10</button>
        </div>

        <h1>Dodging tables <span>BTWEEN</span> 2 to 10 </h1>
        <p id="question">Q{data[0].id}. {data[0].ques} </p>
        <ul id="choices">
          {
            data[0].options.map(i => (
              <li><input type="radio" name="choice" value="A" />{i}</li>
            ))

          }
        </ul>
        <button id="next-button">Next</button>
      </div>
    </body>
  );
}

export default App;
