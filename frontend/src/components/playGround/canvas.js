import React, { useRef, useEffect } from 'react'
import '@google/model-viewer';
import tw from "twin.macro";
import styled from "styled-components";


const CanvasContainer = styled.div`
  ${tw`
    z-0
    absolute left-0 top-0
  `};
`;

const ModelContainer = styled.div`
  ${tw`
    z-10
    absolute left-0 top-0
  `};
`;

const TabContainer = styled.div`
  ${tw`
    relative
  `};
`;

const Canvas = props => {
  
  const canvasRef = useRef(null)

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    

    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  }, [draw])
  
  return(
    <TabContainer>
      <CanvasContainer>
        <canvas ref={canvasRef} {...props}/>
      </CanvasContainer>
      <ModelContainer>
        <model-viewer src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948" alt="A 3D model of an astronaut" ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer>
      </ModelContainer>
    </TabContainer> 
  )

  
}

export default Canvas

