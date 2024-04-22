import React from "react";
import Item from "./Item";

function List({children}) {
  
  return (
    <ul id="todoList" className="list-group mt-2 p-0">
      {
        children.map((task, index) => {
          return (
            <Item key={task.id} task={task} id={index}/>
          );
        })
      }
    </ul>
  );
}

export default List;
