import React from "react";
import { Card, Typography, Box } from "@mui/material";

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
        <div style={{ marginLeft: 30 }}>
          <img style={{ width: 120, height: 120 }} src={item?.src} />
          <Typography style={{ color: "white", width: "100%" }} variant="h5">
            {item?.label}
          </Typography>
        </div>
      ))}
    </Box>
  );
};

export default Carousel;
