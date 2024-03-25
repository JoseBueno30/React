import "./todoList.css";
import Input from './Components/Input.jsx'
import List from './Components/List.jsx'
import { useState } from "react";

function TodoList() {

  const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    let newTasks = [];
    tasks == [] ? newTasks=task : newTasks = [...tasks, task]
    
    setTasks(newTasks);
    console.log(newTasks);
  }

  const moveUp = (taskId, task) => {
    let newTasks = [...tasks];
    newTasks.splice(taskId, 1);
    newTasks.splice(taskId - 1, 0, task);
    setTasks(newTasks);
    console.log(newTasks);
  }

  const moveDown = (taskId, task) => {
    //remove(taskId) porq no se puede llamar a la funcion q borra un elemento
    let newTasks = [...tasks];
    newTasks.splice(taskId, 1);
    newTasks.splice(taskId+1, 0, task);
    setTasks(newTasks);
    console.log(newTasks);
  }

  const remove = (taskId) => {
    console.log(taskId);
    let newTasks = [...tasks];
    newTasks.splice(taskId, 1);
    setTasks(newTasks);
    console.log(newTasks);
  }
  
  return (
    <div className="container">
      <div className="row">
        <h1 className="h1 text-center bg-primary text-white py-2 mt-2">
          To-do list
        </h1>
        <Input addTask={addTask}/>
        <List moveUp={moveUp} moveDown={moveDown} remove={remove}>
          {tasks}
        </List>
      </div>
    </div>
  );
}

export default TodoList;