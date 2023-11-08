import { useState } from "react";

function WorkingWithArrays(){
    const API = "http://localhost:4000/a5/todos";

    //Made this change otherwise ID or todo.id CANNOT be accessed
    const [todo, setTodo] = useState({
        // id: 1,
        // title: "Task 1",
        // completed: false,
    });

    // const [todo,setTodo] = useState({})


    return(
        <div>
            <h3>Working With Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">Get Todos</a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input className="form-control" value={todo.id} onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            {/* <h5>{todo} lool</h5> */}
            <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">Get Todo by ID</a>

            <h3>Filtering Array Items</h3>
            <a href={`${API}/${todo.id}?completed=true`} className="btn btn-primary me-2">Get Completed Todos</a>

            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`} className="btn btn-primary me-2">Create Todo</a>


        </div>
    )
}

export default WorkingWithArrays;