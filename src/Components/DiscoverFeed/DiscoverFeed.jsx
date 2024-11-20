import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Dialog, Link, Stack, Typography, useTheme } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
const DiscoverFeed = ({ items }) => {
  const [description, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack>
      <Box>
        <Masonry container columns={isSmallScreen ? 2 : 3} spacing={2}>
          {items?.map((item, index) => (
            <div
              item
              style={{ height: index % 3 === 1 ? 400 : 200 }}
              className={"project-card"}
              onClick={() => {
                setDescription(item.description);
                setLink(item.link);
                setOpen(true);
              }}
            >
              <>
                <Typography>
                  <b>{item.name}</b>
                </Typography>
              </>
            </div>
          ))}
        </Masonry>
      </Box>
      {open && (
        <Dialog onClose={() => setOpen(false)} open={open}>
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
              minHeight: 300,
              minWidth: 500,
              marginBottom: "10px",
            }}
          >
            <Typography color="black">{description}</Typography>
            <Link
              style={{ color: theme.palette.text.accent }}
              target="_blank"
              rel="noopener"
              href={link}
            >
              Check it out...
            </Link>
          </div>
        </Dialog>
      )}
    </Stack>
  );
};

export default DiscoverFeed;
