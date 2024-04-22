import React, { useContext } from "react";
import { useState } from "react";
import { TasksHandlersContext } from "../todoList.jsx";

function Input(){
    const[input, setInput] = useState("");

    const addTask = useContext(TasksHandlersContext).handleAddTask;

    const changeHandler = (e) => {
        setInput(document.getElementById("taskInput").value);
    };

    function clickHandler(e) {
        const task ={id: Math.floor(Math.random()*10000), value: input};

        addTask(task);
    };

     return(
        <>
            <input type="text" id="taskInput" onChange={changeHandler} className="col-9" />
            <button type="button" id="addTaskButton" onClick={clickHandler} className="btn btn-success col-3">Add task</button>
        </>
     )
}

export default Input;