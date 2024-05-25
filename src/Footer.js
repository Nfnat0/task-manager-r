import React from 'react';
import { Box, Typography } from '@mui/material';

// Footer component to display the footer content
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
