import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Person,
  ExpandLess,
  ExpandMore,
  ProductionQuantityLimits,
} from "@mui/icons-material";

interface User {
  userName: string;
  // Add other user properties as needed
}

export const Sidebar: React.FC<{
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}> = ({ open, toggleDrawer }) => {
  const [openUser, setOpenUser] = React.useState<boolean>(false);
  const [openProduct, setOpenProduct] = React.useState<boolean>(false);
  const user: User | null = JSON.parse(localStorage.getItem("user") as string);
  const navigate = useNavigate();

  const handleClickUser = () => {
    setOpenUser((prev) => !prev);
  };

  const handleClickProduct = () => {
    setOpenProduct((prev) => !prev);
  };

  const toGoUserList = () => {
    navigate("/user");
  };

  const toGoProductList = () => {
    navigate("/product");
  };

  return (
    <Drawer
      anchor="left"
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
        "& .MuiDrawer-paper": {
          width: "250px",
          position: "fixed",
        },
      }}
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={() => toggleDrawer(false)}
      >
        <Typography variant="h6" sx={{ textAlign: "center", color: "green" }}>
          {user ? user.userName : "unknown"}
        </Typography>
        <Divider />
        <List>
          <ListItemButton onClick={handleClickUser}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="User" />
            {openUser ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 9 }} onClick={toGoUserList}>
                <ListItemText primary="User List" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClickProduct}>
            <ListItemIcon>
              <ProductionQuantityLimits />
            </ListItemIcon>
            <ListItemText primary="Product" />
            {openProduct ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openProduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 9 }} onClick={toGoProductList}>
                <ListItemText primary="Product List" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};
