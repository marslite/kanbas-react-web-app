// import { Link } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import { Routes, Route, Navigate } from "react-router";


function Labs(){
    return(

        <div>
            <Nav/>
            {/* <h1>Assignment 3</h1> */}
            <Routes>
                {/* //Adjusted the first path to redicrect to a3  */}
                <Route path="/" element={<Navigate to="/Labs/a3"/>} />
                <Route path="a3" element={<Assignment3/>} />
                <Route path="a4" element={<Assignment4/>} />


            </Routes>
        </div>
    );
}

export default Labs;