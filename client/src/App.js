import NewTask from './components/NewTask';
import TasksList from './components/TasksList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // hooks
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log('fetch tasks');
  }, []);


  // render
  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <NewTask />
      <TasksList />
    </div>
  );
};

export default App;
