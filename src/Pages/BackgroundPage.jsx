import React from "react";
import { Grid, Stack, Typography, Container, useTheme } from "@mui/material";
import Carousel from "../Components/Carousel/Carousel";
const BackgroundPage = () => {
  const theme = useTheme();

  const Education = () => {
    return (
      <div>
        <Typography style={{ color: theme.palette.text.primary }} variant="h5">
          Education:{" "}
        </Typography>
        <ul>
          <>
            <li>
              <Typography
                style={{ color: theme.palette.text.primary }}
                variant="body1"
              >
                <b>Texas A&M University </b>
                <i>(August 2018 - May 2022)</i>
                <br />
                <i>Bachelors of Science in Computer Science</i>
              </Typography>
            </li>
          </>
        </ul>
      </div>
    );
  };

  const WorkHistory = () => {
    return (
      <div>
        <Typography style={{ color: theme.palette.text.primary }} variant="h5">
          Work History:{" "}
        </Typography>
        <ul>
          <>
            <li>
              <Typography style={{ color: theme.palette.text.primary }}>
                <b>JP Morgan Chase & Co.</b>
                <i>(July 2022 - Present)</i>
                <br />
                <i>Software Engineer 1 </i>
              </Typography>
            </li>
            <Typography style={{ color: theme.palette.text.primary }}>
              - Led cloud-native frontend architecture enhancements, slashing
              development time by 75% through innovative engineering solutions.{" "}
              <br />- Spearheaded analysis and development of
              regulatory-compliant features, blending product knowledge with
              legal standards. <br /> - Mentored engineers in React and Node.js,
              integrating Agile and CI/CD practices to streamline project
              delivery.
            </Typography>
          </>
          <br />
          <>
            <li>
              <Typography style={{ color: theme.palette.text.primary }}>
                <b>Apex Fintech Solutions</b>
                <i>(June 2021 - August 2021)</i>
                <br />
                <i>Application Support Intern </i>
              </Typography>
            </li>
            <Typography style={{ color: theme.palette.text.primary }}>
              - Developed a Python-based automation tool integrating Jira and
              database systems, streamlining client onboarding processes and
              achieving a 13% annual increase in productivity. <br />
              - Identified and proposed automation opportunities across
              departments, demonstrating initiative and cross-functional
              collaboration skills.
              <br />
              - Adapted to changing project requirements with agility, ensuring
              the successful and effective delivery of the automation solution
              despite initial pivots in strategy.
              <br />
            </Typography>
          </>
          <br />
          <>
            <li>
              <Typography style={{ color: theme.palette.text.primary }}>
                <b>Texas A&M Agrilife</b>
                <i>(September 2020 - June 2020)</i>
                <br />
                <i>Senior Programmer </i>
              </Typography>
            </li>
            <Typography style={{ color: theme.palette.text.primary }}>
              - Earned promotion to Senior Programmer within a year by
              spearheading project development, exceeding weekly milestones, and
              enhancing game design methodologies and code readability in the
              Godot game engine.
              <br /> - Developed agent-based AI for the game, creating
              competitive and engaging gameplay for players resulting in longer
              user engagement.
              <br /> - Successfully integrated complex biological theories into
              accessible gameplay, showcasing a unique ability to translate
              academic concepts into engaging digital formats.
            </Typography>
          </>
        </ul>
      </div>
    );
  };

  const technologies = [
    "React",
    "Jenkins",
    "Python",
    "Module Federation",
    "Webpack 5",
    "Typescript",
    "AWS",
    "Javscript",
    "Git",
    "Bitbucket",
    "Github",
    "Jest Testing",
    "Godot",
  ];
  const concepts = [
    "Front-end development",
    "Version control",
    "Deep learning",
    "Agile",
    "DOM",
    "Microfrontend Development",
    "Data Structures",
    "Algorithms",
    "Content Management Services",
  ];

  const skills = [
    "Ownership",
    "Leadership",
    "Testing",
    "Debugging",
    "API Integration",
    "Problem Solving",
    "Communication",
    "Time Management",
    "Attention to Detail",
    "Basic Graphic Design",
    "Responsive Design",
  ];
  return (
    <>
      <Stack
        id="my-background"
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
                    color: theme.palette.text.accent,
                    fontWeight: 800,
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

                <Education />
                <WorkHistory />
                <Typography variant="h5">Technologies:</Typography>
                <Carousel items={technologies} />
                <br />
                <br />
                <Typography variant="h5">Concepts:</Typography>
                <Carousel items={concepts} />
                <br />
                <br />
                <Typography variant="h5">Skills:</Typography>
                <Carousel items={skills} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default BackgroundPage;
