import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HeaderBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const appBarStyle = {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    borderBottom: "0", // Explicitly remove any borders
  };

  const toolbarStyle = {
    padding: "4px 16px",
    minHeight: "auto",
    boxShadow: "none", // Ensure no box shadow here either
    borderBottom: "0", // Explicitly remove any borders
  };
  const buttonStyle = {
    color: "black",
    "&:hover": {
      backgroundColor: "#yellow",
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
          {!isSmallScreen && (
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Samuel Mahan
            </Typography>
          )}

          {isSmallScreen ? (
            <div style={{ textAlign: "center", width: "100%" }}>
              <Typography variant="h6">Sam Mahan</Typography>
              <ButtonGroup
                variant="text"
                orientation="vertical"
                style={{ marginTop: 10 }}
              >
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
            </div>
          ) : (
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
