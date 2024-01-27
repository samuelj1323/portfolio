import React from "react";
import { Grid, Stack, Typography, Container, useTheme } from "@mui/material";
const BackgroundPage = () => {
  const theme = useTheme();

  const Education = () => {
    return (
      <div>
        <Typography variant="h5">Education: </Typography>
        <ul>
          <>
            <li>
              <Typography variant="body1">
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
        <Typography variant="h5">Work History: </Typography>
        <ul>
          <>
            <li>
              <Typography>
                <b>JP Morgan Chase & Co.</b>
                <i>(July 2022 - Present)</i>
                <br />
                <i>Software Engineer 1 </i>
              </Typography>
            </li>
            <Typography>
              - Proactively assumed responsibility for project completion,
              through cross department communication for any issues, regardless
              of direct responsibility. <br /> - Lead cloud native efforts to
              update frontend architecture <br />- Mentored new Software
              engineers <br /> - Guided fellow developers in mastering the
              platform, leveraging my expertise as a key contributor to its
              creation <br /> - Collaborated with design and product teams to
              integrate ADA compliance standards into our website designs.
            </Typography>
          </>
          <br />
          <>
            <li>
              <Typography>
                <b>Apex Fintech Solutions</b>
                <i>(June 2021 - August 2021)</i>
                <br />
                <i>Application Support Intern </i>
              </Typography>
            </li>
            <Typography>
              - Developed a Python-based automation tool integrating Jira and
              database systems, streamlining client onboarding processes and
              achieving a 13% annual increase in productivity. <br />
              - Proactively identified and proposed automation opportunities
              across departments, demonstrating initiative and cross-functional
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
              <Typography>
                <b>Texas A&M Agrilife</b>
                <i>(September 2020 - June 2020)</i>
                <br />
                <i>Senior Programmer </i>
              </Typography>
            </li>
            <Typography>
              - Advanced from Programmer to Senior Programmer within a year at
              Agrilife, recognized for leading project development and
              consistently delivering weekly milestones.
              <br /> - Directed the creation of an interactive game to educate
              players on evolutionary concepts, applying expertise in game
              design and event-based programming. <br />- Developed advanced
              agent-based AI for the game, creating competitive and engaging
              gameplay experiences for players.
              <br /> - Successfully integrated complex biological theories into
              accessible gameplay, showcasing a unique ability to translate
              academic concepts into engaging digital formats.
            </Typography>
          </>
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
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </>
  );
};

export default BackgroundPage;
