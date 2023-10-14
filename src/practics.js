import React from "react";

export default function AppOct14State2() {
    let [grades, setGrades] = React.useState([
        { id: 1, marks: 49, course: "C++" },
        { id: 2, marks: 51, course: "Java" },
        { id: 3, marks: 55, course: "PhP" },
        { id: 4, marks: 45, course: "Python" },
        { id: 5, marks: 40, course: "JavaScript" },
    ]);

    const increment = (index) => {
        let copygrades = [...grades]
        copygrades[index].marks++
        setGrades(copygrades);

    }



    const decrement = (index) => {
        let copygrades = [...grades]
        copygrades[index].marks--
        setGrades(copygrades);
    };
    const dllt = (index) => {
        let copygrades = [...grades]
        delete copygrades[index]
    };

    return (
        <div className="container my-5">
            {grades.map((g, i) => (
                <div key={g.id}>
                    <button onClick={() => increment(i)}>+</button>
                    {g.marks} marks in {g.course} course
                    <button onClick={() => decrement(i)}>-</button>
                    <button>delete</button>
                </div>


        

            ))}
        </div>
    );
};