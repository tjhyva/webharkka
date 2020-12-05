import React, { useRef, useEffect } from 'react'
import {drawStick, drawBall} from './Draw'
 
const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, position, ctx2) => {    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    
    drawStick(ctx2, 80, 30, 15, 0);  
    drawStick(ctx2, 200, 30, 15, 0);
    drawStick(ctx2, 20, 85, 15, 0);  
    drawStick(ctx2, 140, 85, 15, 0);
    drawStick(ctx2, 260, 85, 15, 0);  
    drawStick(ctx2, 80, 140, 15, 0);
    drawStick(ctx2, 200, 140, 15, 0);  
    drawStick(ctx2, 20, 195, 15, 0);
    drawStick(ctx2, 140, 195, 15, 0);  
    drawStick(ctx2, 260, 195, 15, 0);   

    drawBall(ctx, position)
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const context2 = canvas.getContext('2d')
    let ballposition = 0;
    let animationFrameId

    const render = () => {
      ballposition++      
      draw(context, ballposition, context2)
      animationFrameId = window.requestAnimationFrame(render)
    
}
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas width="280" height="300" ref={canvasRef} {...props}/>
}

export default Canvas