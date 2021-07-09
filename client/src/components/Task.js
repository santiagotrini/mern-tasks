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
    <li style={{ textDecoration: done ? 'line-through' : 'none' }}>
      {task.text}
      <input
        checked={done}
        onChange={handleChange}
        type="checkbox" />
      <button onClick={handleClick}>
        <i className="fa fa-lg fa-trash"></i>
      </button>
    </li>
  );
};

export default Task;
