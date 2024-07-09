import { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocatStorageData, setLocatStorageData } from "./LocalStorageData";





const Todo = () => {
  
  //set initial state(data) from local storage
  const [tasks, setTasks] = useState(()=>getLocatStorageData());
   
  //set data(state) in the local storage
  setLocatStorageData(tasks) 
  


  const deleteOne = (task) => {
    let deletedTask = tasks.filter((currVal) => currVal.content !== task);
    setTasks(deletedTask);
  };

  const clearAll = () => {
    setTasks([]);
  };

  const handleChecked=(task)=>{

   const updatedTask = tasks.map((currTask)=>{
    if(currTask.content === task){
      return {...currTask,checked: !currTask.checked}
    }
    else{
      return currTask;
    }
   })
   setTasks(updatedTask);
   
  }
   
  
  
  

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm tasks={tasks} setTasks={setTasks} />

      <section>
        <ul className="myUnOrdList">
          {tasks.map((currTask) => {
            return (
              <TodoList
                checked={currTask.checked}
                task={currTask.content}
                key={currTask.id}
                deleteOne={deleteOne}
                handleChecked={handleChecked}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};
export default Todo;
