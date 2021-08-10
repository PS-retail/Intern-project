import React, { useRef, useEffect } from 'react'
import '@google/model-viewer';
import tw from "twin.macro";
import styled from "styled-components";
import { red } from '@material-ui/core/colors';
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";


const CanvasContainer = styled.div`
  ${tw`
    z-10
    absolute left-0 top-0
  `};
`;

const ModelContainer = styled.div`
  ${tw`
    z-0
    absolute left-0 top-0
    h-full
    w-full
  `};
`;

const TabContainer = styled.div`
  ${tw`
    relative
    
  `};
`;

const ModelViewerStyle = {
  width: "400px",
  height: "600px"
}



const Canvas = () => {
  
  const canvasRef = React.useRef(null)

  
  
  return(
    <TabContainer>

      
      <model-viewer 
        src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948" 
        alt="A 3D model of an astronaut" 
        ar-modes="webxr scene-viewer quick-look" 
        environment-image="neutral" 
        auto-rotate
        style={ModelViewerStyle}
        >

        <CanvasDraw hideGrid='true' backgroundColor = '' brushRadius= '3' lazyRadius = '0' canvasWidth = {ModelViewerStyle.width} canvasHeight = {ModelViewerStyle.height}></CanvasDraw>
      </model-viewer>
    </TabContainer> 
  )

  
}

export default Canvas

