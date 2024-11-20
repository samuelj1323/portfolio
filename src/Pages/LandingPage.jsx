import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Grid,
  Stack,
  Typography,
  Container,
  useTheme,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import HeadShot from "../assets/current_headshot.png";
const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Stack
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            justifyContent: "center",
            height: "100%",
            width: "auto",
          }}
        >
          <Container style={{ paddingTop: "200px", paddingBottom: "200px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography
                  style={{
                    fontSize: "75px",
                    fontWeight: 800,
                    wordWrap: "break-word",
                  }}
                  variant="h3"
                >
                  Welcome to My <b style={{ color: "gold" }}>Portfolio</b>
                </Typography>
                <Button
                  onClick={() => navigate("/contact")}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Let's Chat
                </Button>
              </Grid>
              <Grid
                md={4}
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center", // Horizontal centering
                  alignItems: "center", // Vertical centering
                }}
              >
                {!isSmallScreen && (
                  <div className="circle-container">
                    <img
                      src={HeadShot}
                      alt="Sam's headshot"
                      className="headshot"
                    />
                  </div>
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
      </Stack>
    </div>
  );
};

export default LandingPage;
