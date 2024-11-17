import React from "react";
import {
  Grid,
  Stack,
  Typography,
  Container,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HeadShot from "../assets/headshot_rect.png";
const AboutPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack
        id="about"
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
            paddingTop: 50,
          }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Card
                  style={{
                    borderRadius: 25,
                    marginTop: "10%",
                    padding: 15,
                    boxShadow: "none",
                    backgroundColor: theme.palette.background.darkerDefault,
                  }}
                >
                  <Typography
                    style={{
                      color: theme.palette.text.accent,
                      fontWeight: 800,
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
                      color: theme.palette.text.primary,
                      padding: "5px",
                    }}
                  >
                    <Typography variant="h5">
                      Hello! I'm Sam Mahan, a passionate software engineer based
                      in New York City. I specialize in building efficient,
                      scalable backends, developing optimization algorithms, and
                      crafting mobile technology solutions. With expertise in
                      Spring, React, and a keen interest in micro front-end
                      architecture using Next.js, I bring innovative,
                      user-focused solutions to the forefront of every project.
                      Beyond work, I have a deep love for computer vision and
                      machine learning, having ranked in the top third of a
                      Kaggle multi-class classification competition and
                      developed a high-accuracy VGG model for bird species
                      identification. My commitment to continuous learning fuels
                      my drive to create impactful tech experiences. Outside of
                      coding, you’ll often find me exploring new running routes,
                      bird watching in parks, or enjoying date nights in the
                      vibrant streets of NYC with my wife.
                    </Typography>
                  </div>
                </Card>
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
                  <div className="image-vert-container">
                    <img
                      style={{ width: 500, height: "auto" }}
                      src={HeadShot} // let's change the image. I'm not crazy about it
                      alt="Hands typing"
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

export default AboutPage;
