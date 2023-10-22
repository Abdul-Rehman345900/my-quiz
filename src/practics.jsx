// import {useState} from "react";
// export default function AppOct14State2() {

//     let [grades, setGrades] = useState([
//         { id: 1, marks: 49, course: "C++" },
//         { id: 2, marks: 51, course: "Java" },
//         { id: 3, marks: 55, course: "PhP" },
//         { id: 4, marks: 45, course: "Python" },
//         { id: 5, marks: 40, course: "JavaScript" },
//     ]);
//     let [select, setSelect] = useState([])

//     const increment = (index) => {
//         let copygrades = [...grades]
//         copygrades[index].marks++
//         setGrades(copygrades);

//     };

//     const decrement = (index) => {
//         let copygrades = [...grades]
//         copygrades[index].marks--
//         setGrades(copygrades);
//     };

//     const deleteCourse = (index) => {
//         const copyGrades = [...grades];
//         copyGrades.splice(index, 1);
//         setGrades(copyGrades)
//     };

//     const selected = (index) => {
//         let idx = grades[index]
//         let copyGrades = {...idx}

//         let a = select.push(copyGrades)

//         setSelect(a)
//     }



//     return (
//         <div className="container my-5">
//             {grades.map((g, i) => (
//                 <div key={g.id}>
//                     <button onClick={() => increment(i)}>+</button>
//                     {g.marks} marks in {g.course} course
//                     <button onClick={() => decrement(i)}>-</button>
//                     <button onClick={() => deleteCourse(i)}>Delete</button>
//                     <button onClick={() => selected(i)}>Select</button>
//                 </div>
//             ))}
//             <h1>Selected</h1>

//             {select.map((s, i) => (
//                 <div key={i}>
//                     <span>{s.marks} marks in {s.course} course</span>
//                 </div>
//             ))}
//         </div>
//     );
// };
// import React from "react";
// import questions from "./data/questions.json";

// export default function App() {
//   const [allQuestions, setAllQuestions] = React.useState(questions);

//   const onSelectOption = (qid, op) => {
//     const copyQuestions = [...allQuestions];
//     const question = copyQuestions.find(q => q.id === qid);
//     question.selectedOption = op;
//     setAllQuestions(copyQuestions);
//     console.log(allQuestions); // test
//   }

//   const getOptionStyle = (q, op) => {
//     let style = "list-group-item";

//     if(op === q.selectedOption)
//         style = style + " bg-success";
//     else
//     if(op !== q.selectedOption ) 
//         style = style + "  "
//      if(op !== q.selectedOption)
//         style = style + " bg-danger";

//     return style;
//   }

//   return (
//     <div className="container my-3">
//       <h4>Quiz Demo</h4>
//       {allQuestions.map((q) => (
//         <div className="card my-2" key={q.id}>
//           <div className="card-header"> {q.statement} </div>
//           <ul className="list-group list-group-flush">
//             {q.options.map((op) => (
//               <li
//                 key={op}
//                 className={getOptionStyle(q, op)}
//                 onClick={() => onSelectOption(q.id, op)}
//               >
//                 {op}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }




