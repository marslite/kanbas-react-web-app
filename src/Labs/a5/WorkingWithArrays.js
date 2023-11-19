import axios from "axios";
import { useEffect, useState } from "react";

function WorkingWithArrays(){
    const API = "https://kanbas-node-server-app-zi6l.onrender.com/a5/todos";

    const [errorMessage, setErrorMessage] = useState(null);

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

    const postTodo = async () => {
        const response = await axios.post(API,todo);
        setTodos([...todos, response.data]);
    }

    const removeTodo = async (todo) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    }

    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id ));
            
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message)            
        }
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos( todos.map((t) => (t.id === todo.id ? todo : t)))
            setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message)
            
        }
    }

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data)
    }

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    }

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    }

    useEffect( () => {
        fetchTodos();
    }, []);

            
    // const [todo,setTodo] = useState({})

    return(
        <div>
            <h3>Working With Arrays</h3>
                {/* <input value={todo.id} onChange={(e) => setTodo({...todo, id: e.target.value})}/> */}
                <input value={todo.it} readOnly/> <br/>
                <input value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} type="text"/><br/>
                <textarea onChange={(e)=> setTodo({...todo, description: e.target.value})} value={todo.description} type="text" /><br/>
                <input onChange={(e) => setTodo({...todo, due: e.target.value })} value={todo.due} type="date" /><br/>
                <label> <input onChange={(e)=> setTodo({...todo, completed: e.target.checked})} value={todo.completed} type="checkbox" /> Completed </label><br/>
                <button onClick={postTodo} className="btn btn-danger"> Post Todo</button>
                <button className="btn btn-warning" onClick={updateTodo}>Update Todo</button>
                <button className="btn btn-primary mb-2 w-100" onClick={createTodo}>Create Todo</button>
                <button onClick={updateTitle} className="btn btn-success mb-2 w-100"> Update Title</button>
            <ul className="list-group">
                {todos.map((todo)=> <li key={todo.id} className="list-group-item">
                    <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning me-2 float-end">Edit</button>
                    <button onClick={() => deleteTodo(todo)} className="btn btn-danger float-end"> Delete</button>
                    <input checked={todo.completed} type="checkbox" readOnly/>
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                    </li>)}
            </ul>

            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">  {errorMessage} </div>
            )}

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



            {/* <h3>Test here</h3> */}

            






        </div>
    )
}

export default WorkingWithArrays;