import "./todoList.css";
import Input from './Components/Input.jsx'
import List from './Components/List.jsx'
import { useReducer } from "react";
import todoListReducer from "./todoListLogic.js";

function TodoList() {

  const[tasks, dispatch] = useReducer(todoListReducer, []);

  function handleAddTask(task) {
    dispatch({
      type: 'add',
      task: task,
      taskId: null,
    });
  }

  function handleMoveUp(taskId, task) {
    dispatch({
      type: 'moveUp',
      task: task,
      taskId: taskId,
    });
  }

  function handleMoveDown(taskId, task) {
    dispatch({
      type: 'moveDown',
      task: task,
      taskId: taskId,
    });
  }

  function handleRemove(taskId) {
    dispatch({
      type: 'remove',
      task: null,
      taskId: taskId,
    });
  }
  
  return (
    <div className="container">
      <div className="row">
        <h1 className="h1 text-center bg-primary text-white py-2 mt-2">
          To-do list
        </h1>
        <Input addTask={handleAddTask}/>
        <List moveUp={handleMoveUp} moveDown={handleMoveDown} remove={handleRemove}>
          {tasks}
        </List>
      </div>
    </div>
  );
}

export default TodoList;