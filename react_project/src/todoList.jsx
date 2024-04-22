import "./todoList.css";
import Input from './Components/Input.jsx'
import List from './Components/List.jsx'
import { createContext, useReducer } from "react";
import todoListReducer from "./todoListLogic.js";

export const TasksHandlersContext = createContext(null);

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
        <TasksHandlersContext.Provider value={{handleAddTask, handleMoveUp, handleMoveDown, handleRemove}}>
          <Input />
          <List>
            {tasks}
          </List>
        </TasksHandlersContext.Provider>
      </div>
    </div>
  );
}

export default TodoList;