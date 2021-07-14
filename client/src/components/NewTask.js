import { useState } from 'react';

const NewTask = props => {
  // props
  const { addTask } = props;
  // hooks
  const [text, setText] = useState('');
  // handlers
  const handleSubmit = e => {
    e.preventDefault();
    addTask({ text });
    setText('');
  };
  // render
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Nueva tarea"
        onChange={e => setText(e.target.value)}
      />
      <input
        className="btn"
        type="submit"
        value="Agregar"
      />
    </form>
  );
};

export default NewTask;
