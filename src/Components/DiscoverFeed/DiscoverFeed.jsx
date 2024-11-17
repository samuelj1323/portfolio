import React from "react";
import { Box, Button, Link, Stack, Typography, useTheme } from "@mui/material";

const DiscoverFeed = ({ items }) => {
  const [description, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");
  const theme = useTheme();
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto", // Enables horizontal scrolling
          "&::-webkit-scrollbar": {
            height: "8px", // Customizes the height of the scrollbar (optional)
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)", // Customizes the color of the scrollbar (optional)
          },
        }}
      >
        {items?.map((item, index) => (
          <div
            style={{
              backgroundColor: theme.palette.background.default,
              marginLeft: 15,
            }}
            className="dome-card"
          >
            <div>
              <Typography>
                <b>{item.title}</b>
              </Typography>
              <Button
                onClick={() => {
                  setDescription(item.description);
                  setLink(item.link);
                }}
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </Box>
      {description && (
        <div>
          <Typography
            style={{
              marginTop: 15,
            }}
            variant="h5"
          >
            Details:{" "}
          </Typography>
          <div
            style={{
              backgroundColor: theme.palette.background.default,
              minHeight: 50,
              marginBottom: "10px",
              padding: 5,
            }}
          >
            <Typography>{description}</Typography>
            <Link
              style={{ color: "brown" }}
              target="_blank"
              rel="noopener"
              href={link}
            >
              Check it out...
            </Link>
          </div>
        </div>
      )}
    </Stack>
  );
};

export default DiscoverFeed;
