export default function todoListReducer(tasks, action){

    const addTask = (task) => {
        let newTasks = [];
        tasks == [] ? newTasks=task : newTasks = [...tasks, task]
        
        return(newTasks);
      }
    
      const moveUp = (taskId, task) => {
        let newTasks = [...tasks];
        if (taskId > 0){
            newTasks.splice(taskId, 1);
            newTasks.splice(taskId-1, 0, task);
        }
        return(newTasks);
      }
    
      const moveDown = (taskId, task) => {
        let newTasks = [...tasks];
        newTasks.splice(taskId, 1);
        newTasks.splice(taskId+1, 0, task);
        return(newTasks);
      }
    
      const remove = (taskId) => {
        let newTasks = [...tasks];
        newTasks.splice(taskId, 1);
        return(newTasks);
      }

      switch (action.type) {
        case 'add':{
            return addTask(action.task);
        }
        case 'moveUp':{
            return moveUp(action.taskId, action.task);
        }
        case 'moveDown':{
             return moveDown(action.taskId, action.task);
        }
        case 'remove':{
            return remove(action.taskId);
        }   
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}