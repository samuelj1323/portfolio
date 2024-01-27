import React from "react";
import { Grid, Stack, Typography, Container, useTheme } from "@mui/material";
import HeadShot from "../assets/headshot_rect.png";
const AboutPage = () => {
  const theme = useTheme();
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
          }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
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
                  Who is Sam?
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
                    color: "whitesmoke",
                    padding: "5px",
                  }}
                >
                  <Typography variant="h5">
                    I'm a Software Engineer with 2 years of experience and a BS
                    in Computer Science. Today I am a frontend engineer at JP
                    Morgan Chase & Co.
                  </Typography>
                  <div
                    style={{
                      width: "60%",
                      height: 4,
                      marginTop: "30px",
                      backgroundColor: "white",
                      radius: 2,
                    }}
                  />
                </div>
              </Grid>
              <Grid
                md={5}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center", // Horizontal centering
                  alignItems: "center", // Vertical centering
                }}
              >
                <div className="image-vert-container">
                  <img
                    style={{ width: 500 }}
                    src={HeadShot}
                    alt="Description of the image"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default AboutPage;
