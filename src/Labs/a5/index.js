import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";


function Assignment5(){
    return(
        <div>
            <h1>Assignment 5</h1>
            <div>
            <a href="http://localhost:4000/a5/welcome" className="list-group-item">Welcome</a>
            </div>
            {/* <SimpleAPIExamples /> */}
            <h1>Simple Api Examples</h1>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
        
        </div>
    );
}

export default Assignment5;