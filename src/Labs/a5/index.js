import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import QuizBase from "./quizbase";




function Assignment5(){
    return(
        <div>
            <h1>Assignment 5</h1>
            <div>
            <a href="http://localhost:4000/a5/welcome" className="list-group-item">Welcome</a>
            </div>
            {/* //There is nothing to import here  */}
            {/* <SimpleAPIExamples /> */}
            <h1>Simple Api Examples</h1>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
            <QuizBase/>
            {/* <h3>testing here</h3> */}


        
        </div>
    );
}

export default Assignment5;