import * as React from "react";
import {
  Grid,
  Stack,
  Typography,
  Container,
  useTheme,
  CircularProgress,
} from "@mui/material";

import DiscoverFeed from "../Components/DiscoverFeed/DiscoverFeed";
import { Octokit } from "octokit";

const username = process.env.USERNAME;
const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({
  auth: token,
});

const ProjectsPage = () => {
  const theme = useTheme();
  const [projects, setProjects] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const getRepos = async () => {
      setIsLoading(true);
      const { data } = await octokit.request(`GET /users/${username}/repos`);
      setProjects(data);
      setIsLoading(false);
    };
    getRepos();
  }, []);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "cent",
        }}
      >
        <CircularProgress sx={{ height: 300, width: 300 }} />
      </div>
    );
  }
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
                    color: theme.palette.text.accent,
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
