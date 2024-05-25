import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './AddTask.css';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [label, setLabel] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, priority, label, dueDate });
    setTitle('');
    setDescription('');
    setPriority('');
    setLabel('');
    setDueDate('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField label="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
      <TextField label="Label" value={label} onChange={(e) => setLabel(e.target.value)} />
      <TextField label="Due Date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} InputLabelProps={{ shrink: true }} />
      <Button type="submit" variant="contained">Add Task</Button>
    </Box>
  );
};

export default AddTask;
