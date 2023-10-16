import ModuleList from "./ModuleList";
import { useParams } from "react-router";

function Modules(){

    const path = useParams();
    const here = console.log(path);

    return(
    <div style={{marginTop: '47px'}}>

        <h2>Modules</h2>
        <ModuleList/>
    </div>

    );
}

export default Modules;