import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Carousel = ({ items }) => {
  return (
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
      {items.map((item, index) => (
        <Card sx={{ minWidth: 200, m: 1, textAlign: "center" }} key={index}>
          <CardContent
            sx={{
              textAlign: "center",
              flex: 1,
              display: "flex",
              alignContent: "center",
            }}
          >
            <Typography style={{ width: "100%" }} variant="h5">
              {item}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Carousel;
