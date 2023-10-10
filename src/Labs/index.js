import { Link } from "react-router-dom";
import Assignment3 from "./a3";


function Labs(){
    return(

        <div>
            <Link to="/hello">Hello</Link> |
            <Link to="/Labs">A3</Link> |
            <Link to="/Kanbas">Kanbas</Link>
            {/* <h1>Assignment 3</h1> */}
            <Assignment3/>
        </div>
    );
}

export default Labs;