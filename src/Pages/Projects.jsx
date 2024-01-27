import React from "react";
import {
  Grid,
  Stack,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HeadShot from "../assets/headshot_rect.png";
import CarouselOfDomes from "../Components/CarouselOfDomes/CarouselOfDomes";
const ProjectsPage = () => {
  const projects = [
    {
      title: "Project Pabu",
      description:
        "Financial dashboard to analyze tweet sentiment values and their relationship to stock values",
    },
    {
      title: "Binary Classification Bank Churn",
      description: "Kaggle Competition of....",
    },
    {
      title: "Machine Learning Progress",
      description: "Note books to learn Machine learning concepts in",
    },
    {
      title: "By the Cover",
      description: "Movie recommendation system based off music and cover art.",
    },
    {
      title: "Andon App",
      description:
        "Mobile app in React-native to get requests for bids on machine parts",
    },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack
        id="projects"
        style={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          minHeight: "100vh",
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
              <Grid item xs={12}>
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
                  Projects
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
                <CarouselOfDomes items={projects} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default ProjectsPage;
