import React from "react";
import { ThemeContext } from "../Context/ThemeProvider/ThemeProvider";
import { Grid, Typography } from "@mui/material";
const LandingPage = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.colors.primaryDark,
        display: "flex",
        flex: 1,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography style={{ color: theme.colors.primaryLight }} variant="h4">
            I am
            <span style={{ color: theme.colors.accent }}> Sam</span>
          </Typography>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
