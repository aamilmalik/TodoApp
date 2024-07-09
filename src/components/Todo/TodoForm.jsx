import { useState } from "react";

const TodoForm = ({ tasks, setTasks }) => {
  const [inpVal, setInpVal] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const handleInput = (value) => {
    setInpVal({
      id: value,
      content: value,
      checked: false,
    });
  };

  const handleSubmit = (evt) => {
    //destructing the state object
    let { id, content, checked } = inpVal;
    evt.preventDefault();
    // to check input field is empty or not
    if (!content) return;

    //check data is already existing or not
    const checkContent = tasks.find((currTask) => {
      return currTask.content === content;
    });
    if (checkContent) return;

    setTasks((prevTask) => [
      ...prevTask,
      { id: id, content: content, checked: checked },
    ]);

    setInpVal({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inpVal.content}
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
export default TodoForm;
