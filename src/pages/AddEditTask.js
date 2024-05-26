import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTask, getTaskById, updateTask, deleteTask } from '../api/taskApi';
import { Link } from 'react-router-dom';

const AddEditTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(taskId);

  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '',
    dueDate: '',
  });

  useEffect(() => {
    if (isEditMode) {
      const fetchTask = async () => {
        const fetchedTask = await getTaskById(taskId);
        setTask(fetchedTask);
      };
      fetchTask();
    }
  }, [taskId, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateTask(taskId, task);
    } else {
      await createTask(task);
    }
    navigate('/');
  };

  const handleDelete = async () => {
    await deleteTask(taskId);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>{isEditMode ? 'Edit Task' : 'Add Task'}</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={task.title}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            value={task.description}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            name="dueDate"
            type="date"
            value={task.dueDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
              {isEditMode ? 'Update' : 'Add'}
            </Button>
            {isEditMode && (
              <Button variant="contained" color="third" onClick={handleDelete} sx={{ mr: 2 }}>
                Delete
              </Button>
            )}
            <Button variant="contained" color="primary" component={Link} to={`/`} sx={{ ml: 'auto' }}>
              Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AddEditTask;
