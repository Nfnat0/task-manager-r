import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const MIN_SIZE = 200; // 最小サイズ
const MAX_SIZE = 400; // 最大サイズ
const TASK_HEIGHT = 200; // 固定高さ

const TaskList = ({ tasks, onTaskCompletion }) => {
  const getTaskSize = () => {
    const taskCount = tasks.length;
    if (taskCount === 0) return MAX_SIZE;
    const size = Math.max(MIN_SIZE, MAX_SIZE - taskCount * 20);
    return size;
  };

  const taskSize = getTaskSize();

  return (
    <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {tasks.map(task => (
        <Paper 
          key={task.taskId} 
          sx={{ 
            p: 2, 
            mb: 2, 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'space-between', 
            alignItems: 'flex-start', 
            width: `${taskSize}px`, // 動的に幅を設定
            height: `${TASK_HEIGHT}px` // 固定高さを設定
          }}
        >
          <Box>
            <Checkbox
              checked={task.completed}
              onChange={() => onTaskCompletion(task)}
            />
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">{task.description}</Typography>
            <Typography variant="body2">Priority: {task.priority}</Typography>
            <Typography variant="body2">Due Date: {task.dueDate}</Typography>
          </Box>
          <Box>
            <Button variant="contained" color="primary" component={Link} to={`/add-edit-task/${task.taskId}`} sx={{ mt: 1 }}>Edit</Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default TaskList;
