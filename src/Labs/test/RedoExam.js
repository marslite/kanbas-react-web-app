import React from "react";
import Test from "./test";
// import Har from "./Har";

function RedoExam(){

    const ewq = ["789","678","567"];
    const qwe = ["890", ...ewq, "456"]
    const wer = qwe.find((bnm,asd) => bnm ===  "678");







    return(
        <div>
            <h1>Hello</h1>
            <h2>Answer is : {wer}</h2>

            <Test/>

        </div>
    );
}


export default RedoExam;