const Task = props => {
  // props
  const { text, done } = props.task;

  const handleClick = e => {
    console.log('no me elimines');
  };

  return (
    <li style={{ textDecoration: done ? 'line-through' : 'none' }}>
      {text}
      <input type="checkbox" />
      <button onClick={handleClick}>
        <i className="fa fa-lg fa-trash"></i>
      </button>
    </li>
  );
};

export default Task;
