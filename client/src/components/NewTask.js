import { useState } from 'react';
import axios from 'axios';

const NewTask = props => {
  // props
  // hooks
  const [text, setText] = useState('');
  // handlers
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submiteando');
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
      <input type="submit" value="Agregar"/>
    </form>
  );
};

export default NewTask;
