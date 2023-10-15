import React from "react";
import { ThemeContext } from "../Context/ThemeProvider/ThemeProvider";
import { Grid, Stack, Typography, Container, Button } from "@mui/material";
import HeadShot from "../assets/headshot.png";
import LinkedIn from "../assets/linkedIn.png";
import GitHub from "../assets/github.png";
import HeaderBar from "../Components/HeaderBar";
const LandingPage = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <Stack
        style={{
          backgroundColor: theme.colors.primaryLight,
          display: "flex",
          flex: 1,
        }}
      >
        <HeaderBar />
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  style={{
                    color: "black",
                    fontSize: "64px",
                    fontWeight: 800,
                    wordWrap: "break-word",
                  }}
                  variant="h3"
                >
                  Hello, my name is{" "}
                  <span
                    style={{
                      color: "#FF9900",
                      fontSize: "64px",
                      fontWeight: 800,
                      wordWrap: "break-word",
                    }}
                  >
                    Sam
                  </span>
                </Typography>
                <Typography variant="h4">Software Engineer</Typography>
                <Grid
                  container
                  style={{ paddingTop: 20, paddingLeft: 20 }}
                  spacing={2}
                >
                  <Button>
                    <img src={LinkedIn} />
                  </Button>
                  <Button>
                    <img src={GitHub} />
                  </Button>
                </Grid>
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
                <img
                  style={{ width: 300 }}
                  src={HeadShot}
                  alt="Description of the image"
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default LandingPage;
