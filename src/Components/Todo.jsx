import { useState } from "react";
import { TextField } from "@mui/material";
import ActionButton from "./ActionButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from "@mui/icons-material/Edit";
import Check from "@mui/icons-material/Check";
import ClearIcon from '@mui/icons-material/Clear';
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBox from "@mui/icons-material/CheckBox";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Todo({ todo, saveEditedTodo, deleteTodo, toggleTodoStatus }) {

  const [editingTodo, setEditingTodo] = useState(null)
  const [deletingTodo, setDeletingTodo] = useState(null)
  const [expand, setExpand] = useState(false)

  return (
    <div className={`flex items-center justify-between mb-2 px-6 py-2 border-[1px] border-solid rounded-md text-gray-500 ${!deletingTodo ? "bg-[#fafbfc] border-[#EEF2F6] hover:bg-[#EFF7FF] hover:border-[#66B2FF]" : "border-[#D32F2F] bg-red-200"}`}>
      {editingTodo ?
        <>
          <TextField
            label="Edit your todo"
            variant="standard"
            size="small"
            value={todo.name}
            onChange={(e) => saveEditedTodo(todo.id, e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && setEditingTodo(null)}
            className="w-[550px]"
          />
          <ActionButton onClick={() => setEditingTodo(null)} icon={<Check/>}/>
        </> : deletingTodo ?
        <>
          <p>Do you really want to delete this todo?</p>
          <div className="min-w-40 text-right">
            <ActionButton onClick={() => deleteTodo(todo.id)} icon={<Check/>}/>
            <ActionButton onClick={() => setDeletingTodo(null)} icon={<ClearIcon/>}/>
          </div>
        </> :
        <>
          <p className={`${!expand ? "m-w-md overflow-hidden text-ellipsis whitespace-nowrap" : "m-w-md break-all"} ${todo.completed && "line-through text-gray-300"}`}>{todo.name}</p>
          <div className="min-w-40 text-right">
            {todo.name.length > 60 && <ActionButton onClick={() => setExpand(expand => !expand)} icon={!expand ? <ExpandMoreIcon/> : <ExpandLessIcon/>}/>}
            <ActionButton onClick={() => setEditingTodo(todo.id)} icon={<Edit/>}/>
            <ActionButton onClick={() => setDeletingTodo(todo.id)} icon={<DeleteIcon/>}/>
            <ActionButton onClick={() => toggleTodoStatus(todo.id)} icon={!todo.completed ? <CheckBoxOutlineBlank/> : <CheckBox/>}/>
          </div>
        </>
      }
    </div>
  )
}

export default Todo;
