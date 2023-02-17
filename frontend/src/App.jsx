import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [left, setLeft] = useState(0)
  
  useEffect(() => {
    fetch('/api/getTodos').then(r => r.json()).then(({ items, left }) => {
      setItems(items)
      setLeft(left)
    })
  }, []);

  return (
    <>

    <h1>Todo List: </h1>
    <ul class="todoItems">
      {items.map((item, index) => (
        <li key={index} className="item">
          {item.completed === true? <span className="completed">{item.thing}</span> : <span>{item.thing}</span>}
          <span className="fa fa-trash"></span>
        </li>
      ))}
    </ul>

    <h2>Left to do: {left}</h2>

    <h2>Add A Todo:</h2>

    <form action="/addTodo" method="POST">
        <input type="text" placeholder="Thing To Do" name="todoItem" />
        <input type="submit" />
    </form>
    </>
  )
}

export default App
