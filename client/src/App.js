import NewTask from './components/NewTask';
import TasksList from './components/TasksList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // --- hooks ---
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get('/api/tasks')
      .then(res => setTasks(res.data));
  }, []);
  // --- helpers ---
  // add task
  const addTask = task => {
    axios.post('/api/tasks', task)
      .then(res => setTasks([...tasks, res.data]));
  };
  // remove task
  const removeTask = id => {
    axios.delete('/api/tasks/' + id)
      .then(res => {
        const filteredTasks = tasks.filter(t => t._id !== id);
        setTasks(filteredTasks);
      });
  };
  // update task
  const updateTask = (id, done) => {
    axios.put('/api/tasks/' + id, { done })
      .then(res => console.log(res.data));
  };
  // render
  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <NewTask addTask={addTask} />
      <TasksList
        tasks={tasks}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
