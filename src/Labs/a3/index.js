import JavaScript from "./JavaScript";
import PathParamters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";

function Assignment3(){
    const {todos} = useSelector((state) => state.todosReducer)
    return(
        <div className="container">
            {/* //use {{}} to use JavaScript within JSX */}
            {/* <h1 style={{marginLeft: '-30px'}}>Assignment 3</h1> */}
            <h1>Assignment3</h1>
            <TodoList/>
            {/* <TodoItem/> */}
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParamters/>
            <JavaScript/>
            <DynamicStyling/>

            <ul className="list-group">
                {todos.map((todo) => (
                    <div>
                    <li className="list-group-item" key={todo.id}>{todo.title} </li>
                    </div>
                ))}
            </ul>
            
        </div>
    );
}

export default Assignment3;