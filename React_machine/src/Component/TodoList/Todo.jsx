import React from 'react'

export default function Todo({todo,onEdit,onDelete}) {
  return (
    <div className='todo'>
        <span>{todo.text}</span>
        <button onClick={()=>onEdit(todo.id)}>Edit</button>
        <button onClick={()=>onDelete(todo.id)}>Delete</button>
    </div>
  )
}
