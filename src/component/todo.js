import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    let onInputChange = (event) => setInputValue(event.target.value);
    const addTodo = () => {
        setTodos([...todos, inputValue]);
        setInputValue('');
    };

    // Delete Single Item of Todo
    const deleteItem = (index) => {
        console.log(index);
        let arr = [...todos];
        console.log(arr);
        arr.splice(index, 1);
        setTodos(arr);
    }

    // Edit Todo
    const editItem = (index) => {
        console.log(index);
        let editQues = prompt('Edit Todo');
        let arr = [...todos];
        arr.splice(index, 1, editQues);
        setTodos(arr);
    }
    

    const showTodo = todos.map((v, i) => <li key={i}> {v}
        <button onClick={() => deleteItem(i)}> Delete </button>
        <button onClick={() => editItem(i)}> Edit </button>
    </li>)

    return <div>
        <h1> Todo App </h1>
        <input value={inputValue} placeholder='Enter Todo' onChange={onInputChange} />
        <button onClick={addTodo}> Add Todo </button>
        <ol>
            {showTodo}
        </ol>
    </div>
}

export default Todo;