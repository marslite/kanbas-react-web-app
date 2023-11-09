import axios from "axios";
import { useEffect, useState } from "react";

function WorkingWithArrays(){
    const API = "http://localhost:4000/a5/todos";

    //Made this change otherwise ID or todo.id CANNOT be accessed
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    }

    const removeTodo = async (todo) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    }

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data)
    }

    useEffect( () => {
        fetchTodos();
    }, []);

            
    // const [todo,setTodo] = useState({})

    return(
        <div>
            <h3>Working With Arrays</h3>
            <ul className="list-group">
                <button className="btn btn-primary mb-2 w-100" onClick={createTodo}>Create Todo</button>
                {todos.map((todo)=> <li key={todo.id} className="list-group-item">
                    <button onClick={() => removeTodo(todo)} className="btn btn-danger float-end"> Remove</button>
                    {todo.title}
                    </li>)}
            </ul>


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


            <input value={todo.id} onChange={ (e) => setTodo({...todo, id: e.target.value})} className="form-control mb-2"  type="number"/>

            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`} className="btn btn-danger me-2">Delete Todo with ID = {todo.id} </a>
            
            {/* <h4>Delin</h4> */}

            <h3>Updating an Item in an Array</h3>
            <input value={todo.title} onChange={(e)=> setTodo({...todo, title: e.target.value})} className="form-control mb-2" type="text"/>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary me-2">Update Title to {todo.title}</a>

            <h5>Extra Credit</h5>

            <h6>Completed:</h6>
            <label htmlFor="lol" >Completed: </label> 
            ${console.log(todo.completed, "Check here")}
            <input type="checkbox" value={todo.completed} id="lol" onChange={(e) => setTodo({...todo, completed: e.target.checked})}/>
            <a href={`${API}/${todo.id}/completed/${todo.completed}`}> Submit</a>

            <h6>Description</h6>
            <input value={todo.description} onChange={(e) => setTodo({...todo, description: e.target.value})} className="form-control mb-2" type="text" />
            <a href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`} className="btn btn-primary me-2">Update Description to {todo.description}</a>






        </div>
    )
}

export default WorkingWithArrays;