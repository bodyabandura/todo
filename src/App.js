import { useEffect, useState, createContext } from "react";
import Todos from "./Components/Todos";
import Header from "./Components/Header";

export const TodoContext = createContext()

function App() {

  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [value, setValue] = useState(0);
  const [completed, setCompleted] = useState(true)

  useEffect(() => {
    if(value === 1) {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    } else if (value === 2) {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
    } else {
      setFilteredTodos(todos.sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1))
    }

    if(todos.length > 0) {
      setCompleted(todos.every(todo => todo.completed === true))
    }
  }, [todos, value])

  return (
    <TodoContext.Provider value={{todos, filteredTodos, setTodos, value, setValue, completed, setCompleted}}>
      <div className="App">
        <Header/>
        <Todos/>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
