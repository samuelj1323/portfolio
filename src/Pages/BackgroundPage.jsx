import React from "react";
import { Grid, Stack, Typography, Container, useTheme } from "@mui/material";
const BackgroundPage = () => {
  const theme = useTheme();

  const Education = () => {};

  const WorkHistory = () => {
    return (
      <div>
        <Typography>Work History: </Typography>
        <ul>
          <li>JP Morgan Chase & Co.</li>
        </ul>
      </div>
    );
  };
  return (
    <>
      <Stack
        id="my-background"
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
            display: "flex",
            flex: 1,
          }}
        >
          <Container>
            <Grid container spacing={3} style={{ paddingTop: "100px" }}>
              <Grid item xs={12} md={7}>
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
                  My Background
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
                    Education
                    <ul>
                      <li>Texas A&M University 2018-2022</li>
                      <>- Bachelors of Science in Computer Science</>
                    </ul>
                    Experience
                    <ul></ul>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default BackgroundPage;
