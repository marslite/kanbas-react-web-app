import { Route, Routes, Navigate} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
function Kanbas(){
    return(
    <div className="d-flex page-content" >
        {/* <Nav/> */}
        {/* <h1>Kanbas</h1> <br/> */}
        <KanbasNavigation/>
        {/* <Account/> */}
        <div>
        <Routes>
            <Route  path="/" element={<Navigate to="dashboard"/>} />
            <Route  path="account" element={<h1>Account</h1>} />
            <Route  path="dashboard" element={<Dashboard/>} />
            <Route  path="courses/*" element={ <h1> Courses</h1>} /> 
            
        </Routes>

        </div>


    </div>


    )
}

export default Kanbas;