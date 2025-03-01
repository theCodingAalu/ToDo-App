const todoInput=document.getElementById('todoInput');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');
const deleteBtn=document.getElementById('deleteBtn');
//add btn click event add karna
let todos=JSON.parse(localStorage.getItem('todos')) || [];//string se retrive karta hai form local storage
//global 
render_func();
//DOM manipulation
console.log(todoInput.value);
addBtn.addEventListener('click',()=>{
    if(todoInput.value)
    todos.push(todoInput.value.trim());
    localStorage.setItem('todos',JSON.stringify(todos));//set karta hai local storage but sting banake 
    //print all the list 
    render_func();
    todoInput.value='';
})
function render_func(){
    todoList.innerHTML='';
    todos.forEach(function(item)
    {
        const li=document.createElement('li');
        li.textContent=item;
        todoList.appendChild(li);
    });
}
deleteBtn.addEventListener('click',()=>{
    if(todos)
    {todos.pop()//Last in first out
    localStorage.setItem('todos',JSON.stringify(todos));
    render_func();
    }
    else{
        alert('Task List is already empty');
    }
})

//delete btn add karte hai
//Aaj humne kya sikha??
//DOM content loaded tab kaam aata hai jab pura html load karna ho --nahi bhi use karenge toh chalega
//localStorage to get and set item in the browser
//forEach
