import Task from './Task';

const TasksList = props => {
  const { tasks, removeTask, updateTask } = props;

  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task._id}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;
