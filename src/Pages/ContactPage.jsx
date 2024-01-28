import {
  Stack,
  Grid,
  Container,
  Typography,
  useTheme,
  Link,
  Card,
} from "@mui/material";
import React from "react";

const ContactPage = () => {
  const contactArr = [
    {
      type: "email",
      label: "Email: samuelj1323@gmail.com",
      link: "mailto:samuelj1323@gmail.com",
    },
    {
      type: "phone",
      label: "Phone: 281-961-1887",
      link: "tel:2819611887",
    },
    {
      type: "link",
      label: "Github",
      link: "https://github.com/samuelj1323",
    },
    {
      type: "link",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sam-m-59b9b9145/",
    },
  ];
  const theme = useTheme();

  //@Todo Fix up this method to make it generic.

  const EnumerateContactCards = () => {
    return contactArr.map((item) => {
      if (item.type === "email") {
        return (
          <Card>
            <Typography>
              Email:{" "}
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = item.link;
                }}
                sx={{ color: "brown" }}
              >
                item.
              </Link>
            </Typography>
          </Card>
        );
      } else if (item.type === "phone") {
      } else if (item.type === "link") {
      } else {
        return;
      }
    });
  };
  return (
    <Stack
      style={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        minHeight: "100vh",
        flex: 1,
      }}
      id="contact"
    >
      <Container>
        <Grid container>
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
            Let's chat...
          </Typography>
          <Grid
            item
            xs={12}
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <Stack style={{ width: "100%" }}>
              <Card
                style={{
                  backgroundColor: theme.palette.background.paper,
                  flex: 1,
                  maxWidth: 600,
                  marginTop: 50,
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Grid container>
                  <Grid item xs={8}>
                    <Typography>Email: </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "mailto:samuelj1323@gmail.com";
                      }}
                      sx={{ color: "brown" }}
                    >
                      samuelj1323@gmail.com
                    </Link>
                  </Grid>
                </Grid>
              </Card>
              <Card
                style={{
                  backgroundColor: theme.palette.background.paper,
                  flex: 1,
                  maxWidth: 600,
                  marginTop: 50,
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Grid container>
                  <Grid item xs={8}>
                    <Typography>Phone: </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "tel:2819611887";
                      }}
                      sx={{ color: "brown" }}
                    >
                      281-961-1887
                    </Link>
                  </Grid>
                </Grid>
              </Card>

              <Card
                style={{
                  backgroundColor: theme.palette.background.paper,
                  flex: 1,
                  maxWidth: 600,
                  marginTop: 50,
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.linkedin.com/in/sam-m-59b9b9145/";
                      }}
                      sx={{ color: "brown" }}
                    >
                      LinkedIn
                    </Link>
                    <Grid item xs={12}>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://github.com/samuelj1323";
                        }}
                        sx={{ color: "brown" }}
                      >
                        Github
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};
export default ContactPage;
