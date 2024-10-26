import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC<{ onMenuClick: () => void }> = ({
  onMenuClick,
}) => {
  const navigator = useNavigate();
  const handleLogout = () => {
    navigator("/login");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100vw",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: "fixed",
        top: 0,
      }}
    >
      <AppBar position="static" sx={{ background: "#508D4E" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <IconButton
            size="small"
            edge="end"
            color="inherit"
            aria-label="logout"
            onClick={handleLogout}
            sx={{ mr: 2 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, padding: 1 }}
            >
              logout
            </Typography>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
