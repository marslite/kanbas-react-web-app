
function TodoForm({
    todo,
    setTodo,
    addTodo,
    updateTodo
}){
    return(
        <li className="list-group-item">
            <button className="btn btn-secondary" onClick={() => addTodo(todo)}>Add</button>
            <button className="btn btn-secondary" onClick={() => updateTodo(todo)}>Update</button>
            <input value={todo.title} onChange={(e)  => setTodo({...todo, title: e.target.value })}/>
        </li>
    );
}

export default TodoForm;