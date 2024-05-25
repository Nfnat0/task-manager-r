import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2 }}>
      <Typography variant="h3" gutterBottom>About</Typography>
      <Typography variant="body1" paragraph>
        This is about pae.
      </Typography>
    </Box>
  );
};

export default About;
