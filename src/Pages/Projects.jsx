import React from "react";
import { Grid, Stack, Typography, Container, useTheme } from "@mui/material";
import CarouselOfDomes from "../Components/CarouselOfDomes/CarouselOfDomes";
const ProjectsPage = () => {
  const projects = [
    {
      title: "Project Pabu",
      description:
        "Project Pabu is a financial dashboard to analyze tweet sentiment values and their relationship to stock values. It was named Pabu because it was a character we all liked from a TV show and was fairly simple to pronounce. We were able to leverage the twitter free API at the time and filter them for the tweets that contained the Stock ticker name for the query we were looking for. From there we were able to leverage the microsoft sentiment analysis API to be able to discern what thoughts were being expressed by the tweet. Simultaneously we were able to utilize the bloomberg stock api to show the value for the company over a period of time. This was to allow users the ability to compare value to sentiment in real time.",
    },
    {
      title: "Binary Classification Bank Churn",
      description:
        "Binary Classification of Bank Churn is a project I was presented via Kaggle, it was a  great opportunity for me to explore feature creation and different activation methods for linear and non-linear data. I was able to utilize a sequential data and ELU methods to train the data into a 0.067 loss for the BCE loss method. Competitions like these are really helpful to me for learning best practices for ML.",
    },
    {
      title: "Machine Learning Progress",
      description:
        "Machine learning progress really is just a repo that I use to showcase my progress in learning ML. Primarily I've been teaching myself pytorch, I've had an interest in machine learning since 2018 when I entered a Convolutional Neural Network Interpretability mentorship in university. While we weren't able to visualize the reasons a network was chose it's outputs, our post-hoc model analysis brought a deep academic curiosity to computer science and machine learning for me. ",
    },
    {
      title: "By the Cover",
      description:
        "By the Cover is a recommendation system for movies based off of movie cover art and the soundtracks to the films. We were able to answer the question, can you judge a movie by it's cover? The answer surprisingly is you can. We were able to vectorize the movie poster images into 260x260 images and from there run similarity matrix functions to find the most similar. We were able to do similar operations to the soundtracks to the films given the spotify API. From there we were able to find the most similar sound tracks. This creates filtered lists to recommend to users. This project was really satisfying when displaying all the images side by side. For some of the recommendations in 'least like the film' in the soundtrack data we were able to find null values essentially. Films where there weren't values and therefore the distance between the vectors were the largest. The tech stack I utilized was React, Python Flask, and Pandas.",
    },
    {
      title: "Andon App",
      description:
        "Andon app refers to the cross platform mobile app I was able to develop in my first internship. Through this project I was able to learn React-native and general front end development. This was a really interesting project as it was the first time I was getting to deal with form values and validations and routing.",
    },
  ];
  const theme = useTheme();
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
