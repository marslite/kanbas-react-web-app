import React, { useState } from "react";

function WorkingWithObjects(){

    const [assignment, setAssignment] = useState({
        id:1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const URL = "http://localhost:4000/a5/assignment"



    return(
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a href={`${URL}/title/${assignment.title}`} className="btn btn-primary me-2 ">Update Title</a>
            <a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary "> Get Title</a> <br/>
            <input onChange={(e) => setAssignment({...assignment, title: e.target.value})} value={assignment.title}/>  <br/>
            <a href="http://localhost:4000/a5/assignment" className="btn btn-primary me-2"> Get Assignment</a> <br/>
            <a href={`${URL}/score/`} className="btn btn-primary me-2 ">Get Score</a> 
            <a href={`${URL}/score/${assignment.score}`} className="btn btn-primary me-2 ">Update Score</a> <br/>
            <input onChange={(e) => setAssignment({...assignment, score: e.target.value})} value={assignment.score}/> <br/>
            <a href="http://localhost:4000/a5/assignment/completed" className="btn btn-primary me-2"> Get Complete Status</a>
            <a href={`${URL}/completed/${assignment.completed}`} className="btn btn-primary me-2 ">Update Complete Status</a> <br/>
            <input onChange={(e) => setAssignment({...assignment, score: e.target.value})} value={assignment.completed}/> 



            <h4>Retrieving Objects</h4>
        </div>
    );
}


export default WorkingWithObjects;