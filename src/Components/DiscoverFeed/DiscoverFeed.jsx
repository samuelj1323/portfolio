import React, { useRef } from "react";
import {
  Box,
  Button,
  Link,
  Stack,
  Card,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
const DiscoverFeed = ({ items }) => {
  const [description, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");
  const theme = useTheme();
  return (
    <Stack>
      <Box>
        <Masonry container columns={3} spacing={2}>
          {items?.map((item, index) => (
            <div
              item
              style={{ height: index % 3 === 1 ? 400 : 200 }}
              className={"project-card"}
            >
              <>
                <Typography>
                  <b>{item.name}</b>
                </Typography>
                {/* <Typography>{item.branches_url}</Typography> */}
                <Button
                  onClick={() => {
                    setDescription(item.description);
                    setLink(item.link);
                  }}
                >
                  Details
                </Button>
              </>
            </div>
          ))}
        </Masonry>
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
