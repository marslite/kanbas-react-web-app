import React from "react";

function QuizBase(){

    // const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};

    // alice.salary += 100000;

    // const handleClick = (parameter = "Hello") => {
    //     console.log(parameter)
    //   }

    const a = {b: 1, c: 2, d: 3}

    const e = {...a, c: 4}
    console.log(e.c)


    // const e = [4, ...a]
    // const [f] = e
    // console.log(f)
    // const e = [4, ...a]
    // const [a, b, c, f] = e
    // console.log(f)



    return(
        <div>
            <h3>Testing here</h3>
            <h2>{e.c}</h2>
{/* 
            <h3>{f}</h3> */}

            {/* <button onClick={handleClick}>Hello</button> */}
            {/* <h2>{[f]}</h2> */}


        </div>
    );
}


export default QuizBase;