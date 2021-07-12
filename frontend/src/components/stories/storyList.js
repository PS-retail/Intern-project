import React from "react";
import { Grid } from "@material-ui/core";

import Story from "./story";

const stories = [
  {
    id: 1,
    name: "Speaker",
    description: "Luxury Speaker",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/3ZF2s3thI5V4P20UBbFh4S/1896eb95b22bd710964851e1d20f4700/Beosound_A1-2nd_Gen-03.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false
  },
  {
    id: 2,
    name: "Headphones",
    description: "Luxury Headphones",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/1MLCdu8QmjqBhFpBeVG5pi/ad0b7af512c9daca76518dbe3d0fa2b7/H95_berluti_1.png?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false
  },
];

const StoryList = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {stories.map((story) => {
          return (
            <Grid item key={story.id} xs={12} sm={6} md={4} lg={3}>
              <Story story={story} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default StoryList;
