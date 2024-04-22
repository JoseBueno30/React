import React, { useContext } from "react";
import upButton from '../Resources/taskUp.png';
import downButton from '../Resources/taskDown.png';
import removeButton from '../Resources/removeTask.png';
import { TasksHandlersContext } from "../todoList.jsx";

function Item({task, id}){
    const moveUp = useContext(TasksHandlersContext).handleMoveUp;
    const moveDown = useContext(TasksHandlersContext).handleMoveDown;
    const remove = useContext(TasksHandlersContext).handleRemove;

    const upHandler = () =>{
        moveUp(id, task);
    }

    const downHandler = () =>{
        moveDown(id, task);
    }

    const removeHandler = () =>{
        remove(id);
    }

    return(
        <li className="list-group-item d-flex flex-row align-items-center">
              <span className="taskName flex-grow-1">{task.value}</span>
              <img onClick={upHandler} src={upButton} />
              <img onClick={downHandler} src={downButton}/>
              <img onClick={removeHandler} src={removeButton}/>
        </li>
    )
}

export default Item;