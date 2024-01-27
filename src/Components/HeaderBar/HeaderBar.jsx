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
          <Typography
            variant="h3"
            style={{ flexGrow: 1, fontFamily: "the-seasons" }}
          >
            Samuel Mahan
          </Typography>

          {!isSmallScreen && (
            <ButtonGroup variant="text">
              <Button style={buttonStyle} onClick={() => {}}>
                About
              </Button>
              <Button style={buttonStyle} onClick={() => {}}>
                Experience
              </Button>
              <Button style={buttonStyle} onClick={() => {}}>
                Project
              </Button>
              <Button style={buttonStyle} onClick={() => {}}>
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
