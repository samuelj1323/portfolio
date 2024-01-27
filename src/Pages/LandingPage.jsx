import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Stack, Typography, Container, useTheme } from "@mui/material";
import HeadShot from "../assets/current_headshot.png";
const LandingPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Stack
        style={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flex: 1,
        }}
      >
        {matches && (
          <Typography style={{ color: "white" }}>Hello world</Typography>
        )}
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Container>
            <Grid container spacing={3} style={{ paddingTop: "100px" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  style={{
                    color: "White",
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
                    paddingTop: 20,
                    paddingLeft: 20,
                    paddingBottom: 80,
                  }}
                  spacing={2}
                />
                <div
                  variant="outlined"
                  style={{
                    border: true,
                    color: "white",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    padding: "5px",
                    borderRadius: "15px",
                    display: "inline-block",
                  }}
                >
                  <Typography variant="h5">
                    Samuel Mahan / Software Engineer
                  </Typography>
                </div>
              </Grid>
              <Grid
                md={6}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center", // Horizontal centering
                  alignItems: "center", // Vertical centering
                }}
              >
                {!matches && (
                  <div className="image-container">
                    <div className="oval-image">
                      <img
                        style={{ width: 500 }}
                        src={HeadShot}
                        alt="Description of the image"
                      />
                    </div>
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
