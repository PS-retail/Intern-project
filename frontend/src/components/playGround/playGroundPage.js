import React, { useState } from "react";
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
import MediaCard from './card'

const useStyles = makeStyles({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
  },

  container: {
    display: "flex",
    
  },
  panel: {
    width: "100%"
  },

});



export default function PlayGroundPage() {
  const [value, setValue] = React.useState("1");
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ModelCanvas, setModelCanvas] = useState("");

  function changeToCanvas(){
    setValue("2");
    setModelCanvas("https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948");
  }


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
              
              
            >
              <MediaCard
                productName = "Beolab 50"
                imageSrc = "https://images.ctfassets.net/8cd2csgvqd3m/5idLXKkPidYN49NvdNciUa/284fc74753af424361a55700a11b1eef/72529431_1118767524988584_1950461824411369472_n.jpg.png?q=90&fm=png&w=480&h=480&fit=fill"
                description = "The future of sound"
                className={classes.card}
                canvasMode = {changeToCanvas}
              >
                
              </MediaCard>
              
              <MediaCard
                productName = "Beovision Eclipse"
                imageSrc = "https://images.ctfassets.net/8cd2csgvqd3m/5phw37OsT8BoeyhmqfJaud/d0509804927b87fb96aad5d13b0f41e6/55_natural_mot_stand_light_oak.png?q=90&fm=png&w=480&h=480&fit=fill"
                description = "Crafted sound design"
                className={classes.card}
                canvasMode = {changeToCanvas}
              >

              </MediaCard>
            </Box>
          </TabPanel>
          <TabPanel value="2" className={classes.panel}>
            <Box
              className={classes.container}
            >
              <Canvas
                selectedModel = {ModelCanvas}
              
              >

              </Canvas>
            </Box>
          </TabPanel>
          
        </Box>
      </TabContext>
    </Box>
  );
}
