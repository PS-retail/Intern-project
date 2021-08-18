import React, { useRef, useEffect } from 'react'
import '@google/model-viewer';
import tw from "twin.macro";
import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import { io } from "socket.io-client";


const ENDPOINT = "http://localhost:5000";
var socket;

// const CanvasContainer = styled.div`
//   ${tw`
//     z-10
//     absolute left-0 top-0
//   `};
// `;

// const ModelContainer = styled.div`
//   ${tw`
//     z-0
//     absolute left-0 top-0
//     h-full
//     w-full
//   `};
// `;

const TabContainer = styled.div`
  ${tw`
    relative
    
  `};
`;

const ModelViewerStyle = {
  width: "400px",
  height: "600px"
}

function updateRotation(direction, currentAngle){
  
  //right
  if(direction === 1){
    if(currentAngle + 5 > 360){
      socket.emit('rotation', 5);
      return 5;
    } else {
      socket.emit('rotation', currentAngle + 5);
      return currentAngle + 5;
    }
  }

  //left
  if(direction === -1){
    if(currentAngle - 5 < 0){
      socket.emit('rotation', 355);
      return 355;
    } else {
      socket.emit('rotation', currentAngle - 5);
      return currentAngle - 5;
    }
    
  }
  
}

function syncDrawing(canvasRef){
  
  if(socket != null && canvasRef != null){
    console.log("called");
    socket.emit('draw', canvasRef.current.getSaveData());
  } 
  
}



function Canvas(props){
  
  
  const canvasRef = useRef(null);
  const modelRef = useRef(null);
  const [rotation, setRotation] = React.useState(0)

  useEffect(() =>{
    
    socket = io(ENDPOINT);
    socket.on('rotationUpdate', data => {
      setRotation(data);
    });


    socket.on('drawUpdate', data => {
      canvasRef.current.loadSaveData(data, true);
      
    })

    //clean up when closing
    return () => socket.disconnect();

  }, []);

 

  /*useEffect(() => {
    console.log("changed");
    
  }, [canvasRef.current.isPressing])*/
  
  
  return(
    <TabContainer>

      
      <model-viewer 
        src= {props.selectedModel}
        alt="A 3D model of an astronaut" 
        ar-modes="webxr scene-viewer quick-look" 
        environment-image="neutral" 
        camera-orbit={rotation.toString() + "deg" + " " + "2.5m"}
        style={ModelViewerStyle}
        ref = {modelRef}
        onClick = {() => syncDrawing(canvasRef)}
        >

        <CanvasDraw 
          ref={canvasRef}
          
          hideGrid='true' 
          backgroundColor = '' b
          rushRadius= '3' 
          lazyRadius = '0'
          brushRadius = '5'
          brushColor = '#00FFFF'
          canvasWidth = {ModelViewerStyle.width} 
          canvasHeight = {ModelViewerStyle.height}
          
          
          >

        </CanvasDraw>
      </model-viewer>
      <button 
        onClick={() => {
          canvasRef.current.clear();
          syncDrawing(canvasRef);
        }}
      >
        Clear
      </button>
      <button 
        onClick={() => {
          canvasRef.current.undo();
          syncDrawing(canvasRef);
          
        }}
      >
        Undo
      </button>
      <button 
        onClick={() => {
          setRotation(updateRotation(1, rotation));
        }}
      >
        Right
      </button>

      <button 
        onClick={() => {
          setRotation(updateRotation(-1, rotation));
        }}
      >
        Left
      </button>

      <button 
        onClick={() => {
          
        }}
      >
        Sketch Mode
      </button>
    </TabContainer> 
  )

  
}

export default Canvas

