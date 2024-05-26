import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TaskList from '../components/TaskList';
import { getTasks, updateTask } from '../api/taskApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  const handleTaskCompletion = async (task) => {
    const updatedTask = { ...task, completed: true };
    await updateTask(task.taskId, updatedTask);
    setTasks(tasks.map(t => (t.taskId === task.taskId ? updatedTask : t)));
  };

  return (
    <Container className="home-container">
      <div className="home-header">
        <Typography variant="h4">Task List</Typography>
        <Button variant="contained" color="primary" component={Link} to="/add-edit-task">Add Task</Button>
      </div>
      <div className="task-list-container">
        <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
      </div>
    </Container>
  );
};

export default Home;
