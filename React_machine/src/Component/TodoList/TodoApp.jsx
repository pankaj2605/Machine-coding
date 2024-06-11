import React, { useState } from 'react'
import "./TodoApp.css"
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    const [todos,setTodos]=useState([]);
    const [input,setInput]=useState('');
    const [isEditing,setIsEditing] =useState(false);
    const [currentTodo,setCurrentTodo] =useState(null);

    const handleDeleteTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id !==id ))
    }
    const handleEditTodo=(id)=>{
        
        const todo =todos.find(todo=> todo.id === id);
        setInput(todo.text);
        setIsEditing(true);
        setCurrentTodo(todo)
    }
    const handleAddTodo=(e)=>{
        if(input.trim()==='')return

        if(isEditing){
            setTodos(
                todos.map(todo=>
                    todo.id === currentTodo.id ? {...todo,text:input} :todo
                )
            );

            setIsEditing(false)
            setCurrentTodo(null);
        }else{
            setTodos((prev)=>[...prev,{id:uuidv4(),text:input}]);
        }
    }

    console.log(todos)
  return (
    <div className='App'>
        <h1>Todo List</h1>
        <div className='todo-App'>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={handleAddTodo} >{isEditing? 'Update Todo' :'Add Todo'}</button>
            <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
        </div>

    </div>
  )
}
