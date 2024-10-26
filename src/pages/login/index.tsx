import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../servics";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  // Functions
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginAPI(userName, password);

      if (response.authToken && response.user) {
        localStorage.setItem("token", response.authToken);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/");
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh", padding: "20px" }}
      >
        <Grid item xs={12} sm={8} md={5} lg={4} justifyContent="center">
          <Paper>
            <Box display="flex" justifyContent="center" alignContent="center">
              <Icon color="success">
                <LoginIcon />
              </Icon>
            </Box>

            <Typography align="center" padding={2}>
              Login
            </Typography>
            <Grid container justifyContent="center" spacing={2} padding={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  fullWidth
                  color="success"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-adornment-password"
                  variant="outlined"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  color="success"
                />
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error">{error}</Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleLogin}
                  disabled={loading}
                  fullWidth
                  sx={{
                    background: "green",
                    color: "white",
                    "&:hover": {
                      background: "darkgreen",
                    },
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
