import {add, subtract} from "./math.js";


const todos = [
    {id:1, text: 'Learn 1', isCompleted: false},
    {id:3, text: 'Learn 2', isCompleted: false},
    {id:3, text: 'Learn 3', isCompleted: false},
    {id:4, text: 'Learn 4', isCompleted: false},
]

console.log('hello')

document.getElementById('lol').innerHTML = "loool";

function renderTodos(todos){
    document.write("<h1>Dynamically created</h1>")
    document.write("<ul>");
    todos.forEach((todo) =>{
        document.write(`<li>${todo.text} ${todo.isCompleted}</li>`)
    });
    document.write("<p>Works!</p>")
    document.write("</ul>");
}


function renderHello(){
    document.write("<h1>Hello text</h1>")
    todos.forEach((todo)=>{
        document.write(``)
    })
}

renderTodos(todos)

// alpha = add(5,5);

// console.log(add(1,2));
// console.log(subtract(2,2));

document.getElementById('l1').innerHTML = add(4,50)

