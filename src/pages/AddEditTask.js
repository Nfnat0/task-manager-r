import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTask, getTaskById, updateTask, deleteTask } from '../api/taskApi';

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
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Container className="add-edit-task-container">
        <Typography variant="h4" className="add-edit-task-header">{isEditMode ? 'Edit Task' : 'Add Task'}</Typography>
        <Box component="form" onSubmit={handleSubmit} className="add-edit-task-form">
          <TextField
            label="Title"
            name="title"
            value={task.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={task.description}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Due Date"
            name="dueDate"
            type="date"
            value={task.dueDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            {isEditMode ? 'Update Task' : 'Add Task'}
          </Button>
          {isEditMode && (
            <Button variant="contained" color="secondary" onClick={handleDelete} sx={{ ml: 2 }}>
              Delete Task
            </Button>
          )}
        </Box>
      </Container>
     </Box>
  );
};

export default AddEditTask;
