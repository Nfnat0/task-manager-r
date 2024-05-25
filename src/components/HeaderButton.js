import React from "react";
import { Button } from "@mui/material";

const HeaderButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        color: "white",
        borderRadius: '8px',
        backgroundColor: "#9C27B0",
        margin: "0 5px",
        padding: '6px 16px',
        minWidth: '100px', // Standardized size
        "&:hover": {
          backgroundColor: "rgb(17, 82, 147)",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default HeaderButton;
