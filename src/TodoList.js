import React from 'react'
import Todo from './Todo'; 

export default function TodoList({todos, toggleTodo}) {
    
    return (
        todos.map(function(todo) {
            return <Todo key={todo.id} toggleTodo= {toggleTodo} todo={todo} />
        } )
    )
}
