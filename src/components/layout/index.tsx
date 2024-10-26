import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />
      <Navbar onMenuClick={() => toggleSidebar(true)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: sidebarOpen ? "250px" : "0",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
