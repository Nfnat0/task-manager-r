import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TaskList from "../components/TaskList";
import { getTasks } from "../api/taskApi";
import { Link } from "react-router-dom";
// import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  return (
    <Container className="home-container">
      <div className="home-header">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/add-task"
        >
          Add Task
        </Button>
      </div>
      <div className="task-list-container">
        <TaskList tasks={tasks} />
      </div>
    </Container>
  );
};

export default Home;
