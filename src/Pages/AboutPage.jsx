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
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            flex: 1,
            paddingTop: 100,
          }}
        >
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography
                  style={{
                    color: theme.palette.text.accent,
                    fontWeight: 800,
                    wordWrap: "break-word",
                  }}
                  variant="h3"
                >
                  About
                </Typography>
                <Card
                  style={{
                    borderRadius: 25,
                    marginTop: "10%",
                    padding: 15,
                    boxShadow: "none",
                    backgroundColor: theme.palette.background.darkerDefault,
                  }}
                >
                  <div
                    variant="outlined"
                    style={{
                      color: theme.palette.text.primary,
                      padding: "5px",
                    }}
                  >
                    <Typography variant="h5">Howdy! I'm Sam Mahan,</Typography>
                    <Typography>
                      {" "}
                      a dedicated and product-focused software engineer
                      originally from Houston, Texas, and a proud graduate of
                      Texas A&M University. My passion lies in taking ownership
                      of projects from start to finish, ensuring a deep sense of
                      fulfillment in my work. With two years of experience as a
                      full-stack engineer, I specialize in Microfrontend
                      Development and architecture. In my free time, I love
                      experimenting with machine learning models, merging
                      innovation with my engineering expertise to continuously
                      enhance my craft.
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
                  <div>
                    <img
                      style={{ width: 300, height: "auto" }}
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
