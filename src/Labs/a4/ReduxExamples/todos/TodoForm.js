import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


function TodoForm(
//     todo,
//     setTodo,
//     addTodo,
//     updateTodo
// })
){
    const {todo} = useSelector((state) => state.todosReducer)
    const dispatch = useDispatch();
    
    return(

        <li className="list-group-item">
            <button className="btn btn-secondary" onClick={() => dispatch(addTodo(todo))}>Add</button>
            <button className="btn btn-secondary" onClick={() => dispatch(updateTodo(todo))}>Update</button>
            <input value={todo.title} onChange={(e)  => dispatch(setTodo({...todo, title: e.target.value}))} />
        </li>
    );
}

export default TodoForm;