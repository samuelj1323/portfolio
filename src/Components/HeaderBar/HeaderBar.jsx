import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  ButtonGroup,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const HeaderBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = (page) => {
    typeof page === "string" && navigateToPage(page);
    setAnchorEl(null);
  };
  const appBarStyle = {
    backgroundColor: theme.palette.background.default,
    minWidth: "100%",
    boxShadow: "none",
    color: theme.palette.text.primary,
    borderBottom: "0", // Explicitly remove any borders
  };
  const toolbarStyle = {
    padding: "4px 16px",
    width: "auto",
    minHeight: "auto",
    boxShadow: "none", // Ensure no box shadow here either
    borderBottom: "0", // Explicitly remove any borders
  };
  const buttonStyle = {
    color: theme.palette.text.primary,
    textTransform: "none",
    fontSize: 17,
    "&:hover": {
      backgroundColor: "#white",
    },
  };
  const navigateToPage = (page) => {
    navigate(page);
  };

  const menuItems = (
    <ButtonGroup variant="text">
      <Button style={buttonStyle} onClick={() => navigateToPage("/about")}>
        About
      </Button>
      <Button style={buttonStyle} onClick={() => navigateToPage("/background")}>
        Background
      </Button>
      <Button style={buttonStyle} onClick={() => navigateToPage("/projects")}>
        Projects
      </Button>
      <Button style={buttonStyle} onClick={() => navigateToPage("/contact")}>
        Contact
      </Button>
    </ButtonGroup>
  );

  const smallScreenMenu = (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem
        style={{ color: "black" }}
        onClick={() => handleClose("/about")}
      >
        About
      </MenuItem>
      <MenuItem
        style={{ color: "black" }}
        onClick={() => handleClose("/background")}
      >
        Background
      </MenuItem>
      <MenuItem
        style={{ color: "black" }}
        onClick={() => handleClose("/projects")}
      >
        Projects
      </MenuItem>
      <MenuItem
        style={{ color: "black" }}
        onClick={() => handleClose("/contact")}
      >
        Contact
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar
        position="sticky"
        style={appBarStyle}
        elevation={0}
        color="default"
      >
        <Toolbar style={toolbarStyle} variant="dense">
          <Typography
            onClick={() => navigateToPage("/")}
            variant="h3"
            style={{ flexGrow: 1 }}
          >
            Samuel Mahan
          </Typography>

          {!isSmallScreen ? (
            menuItems
          ) : (
            <div>
              <Button
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                MENU
              </Button>
              {smallScreenMenu}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
