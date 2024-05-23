import React from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';

const Home = () => {
  const handleAddTask = (task) => {
    // Add task to the backend
    // axios.post('/api/tasks', task).then(response => console.log(response));
  };

  return (
    <div className="home">
      <AddTask onAdd={handleAddTask} />
      <TaskList />
    </div>
  );
};

export default Home;
