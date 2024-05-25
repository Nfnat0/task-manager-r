import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import { createTask, getTasks } from '../api/taskApi';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  return (
    <Container>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default Home;
