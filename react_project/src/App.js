import './App.css';

function App() {
  return (
    <div class="container">
      <div class="row">
        <h1 class="h1 text-center bg-primary text-white py-2 mt-2">
          To-do list
        </h1>
        <input type="text" id="taskInput" class="col-9" />
        <button type="button" id="addTaskButton" class="btn btn-success col-3">
          Add task
        </button>
        <ul id="todoList" class="list-group mt-2 p-0">
          {/* <li class="list-group-item d-flex flex-row align-items-center">
              <span class="taskName flex-grow-1">Call mom</span>
              <img src="images/taskUp.png" />
              <img src="images/taskDown.png" />
              <img src="images/removeTask.png" />
            </li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
