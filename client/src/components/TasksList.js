import Task from './Task';

const TasksList = props => {
  const { tasks, removeTask, updateTask } = props;

  return (
    <div className="list">
      {tasks.map(task => (
        <Task
          key={task._id}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
