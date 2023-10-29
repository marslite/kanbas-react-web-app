
function TodoItem({
    todo, 
    deleteTodo,
    setTodo
}){
    return(
        <li key={todo.id} className="list-group-item">
            <button className="btn btn-secondary" onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button className="btn btn-secondary" onClick={() => setTodo(todo)}>Edit</button>
            {todo.title}
        </li>
    )
}


export default TodoItem;