import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [todos, Settodos] = useState([]);
  const inputRef = useRef()

  const Addtodo = () => {
    const newTodo = inputRef.current.value;
    if (newTodo) {
      Settodos([...todos, newTodo]);
      inputRef.current.value = '';
    }
  }

  function del(index){
    todos.splice(index , 1)
    Settodos([...todos ]);
  };

  function edit(index){
    const newVal = prompt("Enter your updated value"); 
    todos.splice(index , 1 , newVal);
    Settodos([...todos]);
  }

  return (
    <>
      <h1 className='text-center mt-5'>Todo App</h1>
      <div className='main-div'>
        <div className='d-flex justify-content-center gap-2 mt-2 todo_div'>
          <input type="text" ref={inputRef} className='' placeholder='Enter Your Value' />
          <button onClick={Addtodo}>Add Todo</button>
        </div>

        <div className='ul-div'>
          <ul className='mt-5 '>
            {todos.map((item, index) => (
              <div key={index} className='d-flex justify-content-between mt-2 flex-wrap render-todo' >
                <li key={index}>{item}</li>
                <div className='d-flex gap-2 btn-div'>
                <button className='btn btn-danger' onClick={() => del(index)}>Delete</button>
                <button className='btn btn-primary' onClick={() => edit(index)}>Edit</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
