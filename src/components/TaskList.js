import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.taskId} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
