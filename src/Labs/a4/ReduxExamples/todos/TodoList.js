import React, {useState} from "react";
function TodoList(){
    const [todos, setTodos] = useState([
        {id:"1", title: "Learn React"},
        {id:"2", title: "Learn Node"}
    ]);




    return(
        <div>
            <h2>Todo List</h2>
        </div>
    );
}