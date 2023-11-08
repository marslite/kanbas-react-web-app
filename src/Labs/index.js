// import { Link } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import { Routes, Route, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import Assignment5 from "./a5";
import RedoExam from "./test/RedoExam";


function Labs(){
    return(
    <Provider store={store}>
        <div className="container">
            <Nav/>
            <Routes>
                {/* //Adjusted the first path to redicrect to a3  */}
                <Route path="/" element={<Navigate to="/Labs/a3"/>} />
                <Route path="a3" element={<Assignment3/>} />
                <Route path="a4" element={<Assignment4/>} />
                <Route path="a5" element={<Assignment5/>} />
                <Route path="redo" element={<RedoExam/>} />


            </Routes>
        </div>
    </Provider>
    );
}

export default Labs;