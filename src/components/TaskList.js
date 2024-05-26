import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, onTaskCompletion }) => {
  return (
    <Box sx={{ mt: 3 }}>
      {tasks.map(task => (
        <Paper key={task.taskId} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Checkbox
              checked={task.completed}
              onChange={() => onTaskCompletion(task)}
              sx={{ display: task.completed ? 'none' : 'inline-block' }}
            />
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">{task.description}</Typography>
            <Typography variant="body2">Priority: {task.priority}</Typography>
            <Typography variant="body2">Label: {task.label}</Typography>
            <Typography variant="body2">Due Date: {task.dueDate}</Typography>
          </Box>
          <Box>
            <Button variant="contained" color="primary" component={Link} to={`/edit-task/${task.taskId}`} sx={{ mr: 1 }}>Edit</Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default TaskList;
