import { useContext } from "react";
import { TodoContext } from "../App";
import Todo from "./Todo";

function Todos() {

  const { todos, filteredTodos, setTodos } = useContext(TodoContext)

  const saveEditedTodo = (id, newName) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, name: newName } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodoStatus = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))
  }

  return (
    <div className="mt-7">
      {filteredTodos.length > 0 ? filteredTodos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          saveEditedTodo={saveEditedTodo}
          deleteTodo={deleteTodo}
          toggleTodoStatus={toggleTodoStatus}
        />
      )) : <div className="mt-7 text-center">There are no Todos</div>}
    </div>
   );
}

export default Todos;
