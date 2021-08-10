import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@material-ui/core/Box";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { makeStyles } from "@material-ui/core";
import Canvas from './canvas';
import '@google/model-viewer';

const useStyles = makeStyles({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
  },

  container: {
    display: "flex",
    height: "100%",
    width: "100%"
  },
  panel: {
    width: "100%"
  }
});
export default function PlayGroundPage() {
  const [value, setValue] = React.useState("1");
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.appContainer}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList
            variant="scrollable"
            onChange={handleChange}
            aria-label="tabs"
          >
            <Tab label="Models" value="1"/>
            <Tab label="Canvas" value="2" />

            
          </TabList>
        </AppBar>

        <Box className={classes.container}>
          <TabPanel value="1" className={classes.panel}>
            <Box
              className={classes.container}
              style={{ backgroundColor: "red" }}
            >
              Content 1
            </Box>
          </TabPanel>
          <TabPanel value="2" className={classes.panel}>
            <Box
              className={classes.container}
            >
              <Canvas></Canvas>
            </Box>
          </TabPanel>
          
        </Box>
      </TabContext>
    </Box>
  );
}
