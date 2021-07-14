import { useState } from 'react';
const Task = props => {
  // props
  const { removeTask, task, updateTask } = props;
  // hooks
  const [done, setDone] = useState(task.done);

  const handleClick = e => {
    removeTask(task._id);
  };

  const handleChange = e => {
    setDone(prevState => {
      updateTask(task._id, !prevState);
      return !prevState;
    });

  };

  return (
    <div
      className="task"
      style={{ textDecoration: done ? 'line-through' : 'none' }}>
      <p className="taskText">{task.text}</p>
      <input
        className="check"
        checked={done}
        onChange={handleChange}
        type="checkbox" />
      <button
        className="trash"
        onClick={handleClick}>
        <i className="fa fa-lg fa-trash"></i>
      </button>
    </div>
  );
};

export default Task;
