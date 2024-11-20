import {
  Stack,
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

  const EnumerateLinks = () => {
    return (
      <Card
        sx={{
          padding: 5,
          marginTop: 5,
          boxShadow: "none",
          textAlign: "center",
          width: "80%",
          alignSelf: "center",
        }}
      >
        {contactArr?.map((item) => (
          <Typography>
            <Link
              target="_blank"
              rel="noopener"
              to="#"
              href={item.link}
              sx={{ color: theme.palette.text.accent }}
            >
              <b>{item.label}</b>
            </Link>
          </Typography>
        ))}
      </Card>
    );
  };
  return (
    <Stack
      style={{
        display: "flex",
        minHeight: "100vh",
        flex: 1,
      }}
      id="contact"
    >
      <Container>
        <Typography
          style={{
            color: theme.palette.text.accent,
            fontWeight: 800,
            wordWrap: "break-word",
            paddingTop: 100,
          }}
          variant="h3"
        >
          Let's chat...
        </Typography>
      </Container>
      <EnumerateLinks />
    </Stack>
  );
};
export default ContactPage;
