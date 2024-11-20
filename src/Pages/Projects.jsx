import * as React from "react";
import { Grid, Stack, Typography, Container } from "@mui/material";
import { token, username } from "../token";
import { Octokit } from "octokit";
import DiscoverFeed from "../Components/DiscoverFeed/DiscoverFeed";
const octokit = new Octokit({
  auth: token,
});

const ProjectsPage = () => {
  const [projects, setProjects] = React.useState(null);
  React.useEffect(() => {
    const getRepos = async () => {
      const { data } = await octokit.request(`GET /users/${username}/repos`);
      setProjects(data);
      console.log(data);
    };
    getRepos();
  }, []);
  // const projects = [
  //   {
  //     title: "Project Pabu",
  //     link: "https://github.com/samuelj1323/projectPabu",
  //     description:
  //       "Project Pabu stands as a pioneering financial dashboard designed to unveil the intricate correlations between tweet sentiments and stock market dynamics. The inspiration behind its name, 'Pabu,' stems from a beloved character from a popular TV series, chosen for its simplicity and universal appeal. Our innovative approach harnessed the capabilities of Twitter's free API, enabling us to meticulously sift through tweets for specific stock tickers. This was complemented by the integration of Microsoft's Sentiment Analysis API, which provided deep insights into the public's perceptions and emotions surrounding these stocks. Concurrently, we tapped into the Bloomberg Stock API, offering users a comprehensive view of a company's stock performance over time. Project Pabu's core objective is to empower users by providing a real-time analytical framework that bridges the gap between market sentiment and financial valuation, thereby illuminating potential market trends and investment opportunities.",
  //   },
  //   {
  //     title: "Binary Classification Bank Churn",
  //     link: "https://www.kaggle.com/code/mainmahanmahan1323/bank-churn-binary-classifier",
  //     description:
  //       "The 'Binary Classification of Bank Churn' project represented a compelling challenge I encountered on Kaggle, offering an invaluable platform for me to delve into the intricacies of feature engineering and explore various activation techniques tailored for both linear and non-linear datasets. This project allowed me to employ sequential data processing and Exponential Linear Unit (ELU) methods, culminating in a refined model that achieved a notable 0.067 loss utilizing the Binary Cross-Entropy (BCE) loss function. Participating in competitions such as this has been instrumental in enhancing my understanding and application of machine learning best practices, providing a fertile ground for developing sophisticated models and innovative solutions.",
  //   },
  //   {
  //     title: "Machine Learning Progress",
  //     link: "https://github.com/samuelj1323/ML_Learning",
  //     description:
  //       "'Machine Learning Progress' serves as a dynamic repository, chronicling my journey and advancements in the field of machine learning. At the heart of this endeavor has been my self-guided exploration of PyTorch, driven by a passion for machine learning that was ignited in 2018 during a Convolutional Neural Network Interpretability mentorship program at my university. Although our attempts to directly visualize the decision-making processes of neural networks remained elusive, the experience of conducting post-hoc model analyses profoundly deepened my academic fascination with computer science and machine learning. This repository not only marks milestones in my technical proficiency but also reflects a personal voyage of discovery and understanding in this ever-evolving discipline.",
  //   },
  //   {
  //     title: "By the Cover",
  //     link: "https://github.com/samuelj1323/By_The_Cover",
  //     description:
  //       "'By the Cover' stands as an innovative movie recommendation system that ventures beyond traditional metrics, delving into the artistic realms of movie cover art and soundtracks. This project embarked on answering the intriguing question: Can one truly judge a movie by its cover? The answer, quite astonishingly, is affirmative. By converting movie poster images into 260x260 pixel vectors, we employed similarity matrix functions to unearth films with visually akin art. Parallelly, leveraging the Spotify API allowed us to apply analogous techniques to movie soundtracks, identifying those with similar auditory vibes. This methodology facilitated the creation of curated recommendation lists, offering users a unique lens through which to discover films. The project was particularly gratifying when visualizing the comparative imagery of recommendations, especially highlighting 'least like the film' soundtrack instances where disparities in data led to null findings, illustrating the vast distances in our vector space model. The technological backbone of this venture comprised React for the frontend, Python Flask for server-side operations, and Pandas for data manipulation, culminating in a system that not only challenges but celebrates the sensory dimensions of film exploration.",
  //   },
  //   {
  //     title: "Andon App",
  //     link: "https://github.com/samuelj1323/IndustrialApp",
  //     description:
  //       "The 'Andon app' epitomizes the culmination of my initial foray into cross-platform mobile application development, undertaken during my first internship. This project served as a fertile ground for my immersion into React Native and the broader domain of front-end development. It represented a series of firsts for me, marking my initial engagement with managing form values, implementing validations, and navigating the complexities of routing. The Andon app project was not just a technical endeavor but a significant learning milestone, offering me invaluable insights and hands-on experience in the intricacies of building intuitive and responsive mobile applications.",
  //   },
  // ];
  return (
    <>
      <Stack
        id="projects"
        f
        style={{
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
                    color: "black",
                    fontWeight: 800,
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
                <DiscoverFeed items={projects} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default ProjectsPage;
