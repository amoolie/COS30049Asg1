/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
Name: Akash Tabassum
StudentID: 103524286
*/

// Contains the common navigation bar of all websites
import "../index.css";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Pricing", "Contact Us"];
const settings = ["Account", "Report History", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  // when the navigation menu is opened
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //when the user menu is opened
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //when the navMenu is closed
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //when the user menu is closed
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // uses a switch statement to check which button is clicked by the user
  const handleSetting = (setting, event) => {
    switch (setting) {
      case "Report History":
        navigate("/History");
        break;
      case "Logout":
        window.localStorage.removeItem("isLoggedIn");
        navigate("/");
        break;
      case "Account":
        alert("This page has not been created yet");
    }
  };

  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          borderRadius: 100,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          maxWidth: {
            lg: "1000px",
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <WbSunnyIcon
              sx={{
                display: { xs: "none", md: "flex", color: "black" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Sol-ar
            </Typography>

            <Box
              sx={{
                flexGrow: 1,

                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <WbSunnyIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "black",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                color: "black",
                fontWeight: "bold",
                fontSize: "px",
              }}
            >
              <Tooltip title="Login">
                {loggedIn ? (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                ) : (
                  <Link to={"/Login"}>Login</Link>
                )}
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={function (event) {
                      handleCloseUserMenu();
                      handleSetting(setting);
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
