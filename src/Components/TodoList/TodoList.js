import React, {useState} from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'
import './index.css'



const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(newTodos);
    }

    function onRemoveTodo (id) {
        const filteredList = [...todos].filter(eachItem => eachItem.id !== id)

        setTodos(filteredList)
    }
   

    return(
        <div>
            <p className="plans">
                What are your plans?
            </p>
            <TodoForm onSubmit={addTodo}/>
            <ul className='item-container'>
            {todos.map(eachItem => <Todo key={eachItem.id} todoItem={eachItem} onRemoveTodo={onRemoveTodo} />)}
            </ul>
        </div>

    )
}

export default TodoList