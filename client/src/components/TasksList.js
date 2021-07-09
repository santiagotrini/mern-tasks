import Task from './Task';

const TasksList = props => {

  let tasks = [
    {
      _id: 1,
      text: 'Lavar la ropa',
      done: false
    },
    {
      _id: 2,
      text: 'Pasear al perro',
      done: true
    }
  ];

  return (
    <ul>
      {tasks.map(task => (
        <Task key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
