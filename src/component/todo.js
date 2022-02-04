import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    let inputValue = ''
    const onInputChange = (event) =>  inputValue = event.target.value;
    const addTodo = () => setTodos([...todos, inputValue]);
    const showTodo = todos.map((v,i) => <li key={i}> {v} </li>)

    return <div>
        <h1> Todo App </h1>
        <input placeholder='Enter Todo' onChange={onInputChange} />
        <button onClick={addTodo}> Add Todo </button>
        <ol>
            {showTodo}
        </ol>
    </div>
}

export default Todo;