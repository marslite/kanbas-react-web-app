// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function HelloRedux(){
    const {message, txt} = useSelector((state) => state.helloReducer);

    return(
        <div>
            <h1>Hello Redux</h1>
            <h2>{message}</h2>
            <h2>{txt}</h2>
        </div>
    )
}


export default HelloRedux;