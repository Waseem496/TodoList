import React from "react";

import './index.css'

function Todo ({todoItem, onRemoveTodo}) {
    

    const onDeleteTodo = () => {

        onRemoveTodo(todoItem.id)
    }

    return (
        <li className="todo-item">
            <p className="text">{todoItem.text}</p>
            <button  className="del-button" 
            onClick={onDeleteTodo}> Delete</button>
        </li>
    )
}

export default Todo