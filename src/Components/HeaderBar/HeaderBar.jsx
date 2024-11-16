import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";

const HeaderBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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

  return (
    <div>
      <AppBar
        position="sticky"
        style={appBarStyle}
        elevation={0}
        color="default"
      >
        <Toolbar style={toolbarStyle} variant="dense">
          <Typography variant="h3" style={{ flexGrow: 1 }}>
            Samuel Mahan
          </Typography>

          {!isSmallScreen && (
            <ButtonGroup variant="text">
              <Button
                style={buttonStyle}
                onClick={() => {
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </Button>
              <Button
                style={buttonStyle}
                onClick={() => {
                  document
                    .getElementById("my-background")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Background
              </Button>
              <Button
                style={buttonStyle}
                onClick={() => {
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </Button>
              <Button
                style={buttonStyle}
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </Button>
            </ButtonGroup>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
