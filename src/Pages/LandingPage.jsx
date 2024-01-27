import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Grid,
  Stack,
  Typography,
  Container,
  useTheme,
  Button,
} from "@mui/material";
import HeadShot from "../assets/current_headshot.png";
const LandingPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack
        style={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            height: "100vh",
            width: "auto",
          }}
        >
          <Container>
            <Grid container spacing={3} style={{ paddingTop: "150px" }}>
              <Grid item xs={12} md={8}>
                <Typography
                  style={{
                    color: theme.palette.text.primary,
                    fontSize: "75px",
                    fontWeight: 800,
                    fontFamily: "the-seasons",
                    wordWrap: "break-word",
                  }}
                  variant="h3"
                >
                  Welcome to My Portfolio
                </Typography>
                <Grid
                  container
                  style={{
                    display: "flex",
                    flex: 1,
                    paddingTop: 50,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                  spacing={2}
                >
                  <Button
                    sx={{ width: 200, height: 40, textTransform: "none" }}
                    variant="contained"
                  >
                    Let's Chat
                  </Button>
                </Grid>
              </Grid>
              <Grid
                md={4}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center", // Horizontal centering
                  alignItems: "center", // Vertical centering
                }}
              >
                {!isSmallScreen && (
                  <div className="circle-container">
                    <img
                      src={HeadShot}
                      alt="Sam's headshot"
                      className="headshot"
                    />
                  </div>
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default LandingPage;
