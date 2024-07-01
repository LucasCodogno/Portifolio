// components/Layout.js
import React from "react";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        //  minHeight: "92vh",
        height:"100vh"
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
