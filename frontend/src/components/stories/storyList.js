import React from "react";
import { Grid } from "@material-ui/core";

import Story from "./story";

const stories = [
  {
    id: 1,
    name: "Gaming",
    description: "Gaming Experience",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/2WXA1ohDoLlKq0WBBnd5kf/8019e522e39b3940c11425a2d0869498/Gaming_Square.jpg?q=90&fm=webp&w=480&h=480&fit=fill",
    favorite: false
  },
  {
    id: 2,
    name: "Passion",
    description: "Ignite your passion",
    image:
      "https://images.ctfassets.net/8cd2csgvqd3m/2sMP1i5MkrTE1qp9nSJ0CN/2608a755c73401d080c17f04cca7d667/Mosaic_2.jpg?q=90&fm=webp&w=1440&h=808&fit=fill",
    favorite: false
  },
];

const StoryList = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
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
