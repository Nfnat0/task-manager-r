import React from "react";
import Container from "@mui/material/Container";
import { Typography, Box } from "@mui/material";
import AddTaskForm from "../components/AddTaskForm";
// import './AddTask.css';

const AddTask = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 2,
      }}
    >
      <Container className="add-task-container">
        <Typography variant="h4" className="add-task-header">
          Add New Task
        </Typography>
        <AddTaskForm />
      </Container>
    </Box>
  );
};

export default AddTask;
