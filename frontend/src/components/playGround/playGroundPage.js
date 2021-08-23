import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import Canvas from "./canvas";
import "@google/model-viewer";
import Paper from "@material-ui/core/Paper";
import Products from "./products";

const useStyles = makeStyles({
  appContainer: {
    display: "block",
    flexDirection: "column",
    width: "20vw",
    height: "100vh",
  },

  container: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
    maxHeight: "80vh",
  },
  panel: {
    width: "100%",
    overflow: "visible"
  },

  card: {},
});

export default function PlayGroundPage() {
  const [value, setValue] = React.useState("1");
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ModelCanvas, setModelCanvas] = useState("");

  function changeToCanvas() {
    setValue("2");
    setModelCanvas(
      "https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948"
    );
  }

  return (
    <Box className={classes.appContainer}>
      <TabContext value={value}>
        <Paper position="static">
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="tabs"
          >
            <Tab label="Models" value="1" />
            <Tab label="Canvas" value="2" />
          </TabList>
        </Paper>

        <Box className={classes.container}>
          <TabPanel value="1" className={classes.panel}>
            <Products canvasMode={changeToCanvas}/>
          </TabPanel>
          <TabPanel value="2" className={classes.panel}>
            <Box className={classes.container}>
              <Canvas selectedModel={ModelCanvas}></Canvas>
            </Box>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
