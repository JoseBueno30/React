import React from "react";
import Item from "./Item";

function List({children, moveUp, moveDown, remove}) {
  
  return (
    <ul id="todoList" className="list-group mt-2 p-0">
      {
        children.map((task, index) => {
          return (
            <Item key={task.id} task={task} id={index} moveUp={moveUp} moveDown={moveDown} remove={remove}/>
          );
        })
      }
    </ul>
  );
}

export default List;
