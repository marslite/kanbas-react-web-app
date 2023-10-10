import JavaScript from "./JavaScript";
import PathParamters from "./PathParameters";

function Assignment3(){
    return(
        <div className="container">
            {/* //use {{}} to use JavaScript within JSX */}
            {/* <h1 style={{marginLeft: '-30px'}}>Assignment 3</h1> */}
            <h1>Assignment3</h1>
            <JavaScript/>
            <PathParamters/>
            
        </div>
    );
}

export default Assignment3;