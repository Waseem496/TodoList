import React, {useState} from 'react'
import './index.css'

function TodoForm (props) {
    const [input, setInput] = useState('')

    const onChange = e => {
       
        
        setInput(e.target.value)
        
    } 

    const submitForm = e => {
        e.preventDefault()
        
        props.onSubmit({
            id: Math.floor(Math.random()* 10000),
            text: input
        })
        setInput('')
    
    }


    return(
        <form className='todo-form' onSubmit={submitForm}>
        
                <input type="text" placeholder='What needs to be done?' 
                    value={input} className='todo-input' onChange={onChange} />
                <button className='button'> ADD</button>
            

        </form>
    )
}
export default TodoForm