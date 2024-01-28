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
      link: "https://www.linkedin.com/in/sam-m-59b9b9145",
    },
  ];
  const theme = useTheme();

  //@Todo Fix up this method to make it generic.

  const EnumerateContactCards = () => {
    return contactArr.map((item) => {
      return (
        <Card
          sx={{
            padding: 5,
            marginTop: 5,
            textAlign: "center",
            maxWidth: "40%",
            minWidth: 400,
            alignSelf: "center",
          }}
        >
          <Typography>
            <Link
              target="_blank"
              rel="noopener"
              to="#"
              href={item.link}
              sx={{ color: "brown" }}
            >
              {item.label}
            </Link>
          </Typography>
        </Card>
      );
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
      </Container>
      <EnumerateContactCards />
    </Stack>
  );
};
export default ContactPage;
