import { useContext, useState } from "react"
import { Button, Tab, Tabs, TextField } from "@mui/material"
import { TodoContext } from "../App";

function Header () {

  const { todos, setTodos, value, setValue, completed, setCompleted } = useContext(TodoContext)

  const [todo, setTodo] = useState("")
  const [alert, setAlert] = useState(false)

  const addTodo = (todo) => {

    const newTodo = {
      id: Date.now(),
      name: todo,
      completed: false
    }

    if(todo !== "") {
      setTodos([...todos, newTodo])
      setTodo("")
    } else {
      setAlert(prev => !prev)
    }
  }

  const handleInputChange = (e) => {
    setTodo(e.target.value)
    setAlert(false)
  }

  const handleCompleteAll = () => {
    setTodos(todos => todos.map(todo => ({ ...todo, completed: true })));
  }

  const handleDeleteAll = () => {
    setTodos([])
    setCompleted(true)
  }

  return (
    <header>
      <div className="flex gap-5 max-h-14 w-full mb-9">
        <TextField
          error={alert && true}
          helperText={alert && "You can't leave the field empty."}
          label="What should be done?"
          variant="outlined"
          value={todo}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo(todo)}
          className="m-w-xl w-full"
        />
        <Button
          variant="contained"
          onClick={() => addTodo(todo)}
        >
          Add
        </Button>
      </div>
      <div className="flex justify-between">
          <Tabs value={value} onChange={(e, val) => setValue(val)}>
            <Tab label="all" />
            <Tab label="completed" />
            <Tab label="active" />
          </Tabs>
        <div className="flex gap-2">
          <Button variant="outlined" onClick={handleCompleteAll} disabled={completed}>Complete All</Button>
          <Button variant="text" onClick={handleDeleteAll} disabled={todos.length === 0}>Delete All</Button>
        </div>
      </div>
    </header>
   );
}

export default Header ;
