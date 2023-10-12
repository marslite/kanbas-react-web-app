import {Link} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
function Kanbas(){
    return(
    <div className="d-flex page-content" >
        {/* <Nav/> */}
        {/* <h1>Kanbas</h1> <br/> */}
        <KanbasNavigation/>
        {/* <Account/> */}

    </div>


    )
}

export default Kanbas;