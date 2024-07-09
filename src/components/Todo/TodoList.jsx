import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const TodoList=({task,deleteOne,checked,handleChecked})=>{
  


  
  const updatedText = checked ? "checkList" : "notCheckList";

    return(
        <li className="todo-item">
        <span className={updatedText}>{task}</span>
        <button className="check-btn" onClick={()=>handleChecked(task)}>
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => deleteOne(task)}>
          <MdDeleteForever />
        </button>
      </li>
    )
};
export default TodoList;