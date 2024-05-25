import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <Box sx={{ mt: 3 }}>
      {tasks.map(task => (
        <Paper key={task.taskId} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">{task.description}</Typography>
            <Typography variant="body2">Priority: {task.priority}</Typography>
            <Typography variant="body2">Label: {task.label}</Typography>
            <Typography variant="body2">Due Date: {task.dueDate}</Typography>
          </Box>
          <Box>
            <Button variant="contained" color="primary" sx={{ mr: 1 }}>Edit</Button>
            <Button variant="contained" color="secondary">Delete</Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default TaskList;
