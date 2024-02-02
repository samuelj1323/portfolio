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
          backgroundColor: theme.palette.background.white,
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
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  <Typography
                    style={{
                      color: theme.palette.text.primary,
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
                      color: theme.palette.text.primary,
                      padding: "5px",
                    }}
                  >
                    <Typography variant="h5">
                      I'm a Software Engineer with 2 years of experience and a
                      BS in Computer Science. Today I am a frontend engineer at
                      JP Morgan Chase & Co.
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
                      src={HeadShot}
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
