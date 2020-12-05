let direction = 0;
let dicx = 140;

function randomDirection() {    
    const num = Math.random()
    if (num < 0.5) {
     return  -1;
    }
    else {
       return 1;
    }    
}
export const winner = (position, ctx) => {
    ctx.font = "30px Arial";
    if (position < 149) {                
        ctx.fillText("Winner 1!",75,260);            
        }
    else {        
        ctx.fillText("Winner 2!",75,260);                    
    }    
}

export const drawStick = (ctx, pos1, pos2, pos3, pos4) => {
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(pos1, pos2, pos3, pos4, 2*Math.PI)
    ctx.fill()

    return ctx; 
}

export const drawBall = (ctx, position) => {
    

    ctx.fillStyle = '#000000'  
    ctx.beginPath()    
    ctx.fill()


    if (position <= 60) {        
        if(position === 1) {            
            direction = randomDirection()                                    
        }        
        ctx.arc(dicx + direction*position, 20 + position, 20, 0, 2*Math.PI)
    }

    else if (position <= 120) {        
        if (position === 61) {             
            let orgx = direction + dicx;            
            direction = randomDirection();            
            let curx = direction*position + orgx            
            if (curx === 78) {                                                               
                dicx = 139
            }

            else if (curx === 80) {
                dicx = 259
            }
            
            else if (curx === 200) {                                                          
                dicx = 21
            }            
        }        
        ctx.arc(dicx + direction*position, 20 + position, 20, 0, 2*Math.PI)                    
    }

    else if (position <= 180) {        
        if (position === 121) {             
            let orgx = direction + dicx;            
            direction = randomDirection();
            let curx = direction*position + orgx            
         
            if (curx === 259 || curx === 17) {                
                if (curx === 17) {
                    direction *= -1
                }
                dicx = -99
            }
            else if (curx === -99 || curx === 379) {                
                if (curx === 379) {
                    direction *= -1;
                }
                dicx = 259;
            }
            else if (curx === 20 || curx === 262) {                 
                if (curx === 262) {
                    direction *= -1; 
                }               
                dicx = 379;
            }
        }
        ctx.arc(dicx + direction*position, 20 + position, 20, 0, 2*Math.PI)
    }
    else {
        let stopx = dicx + direction*180;
        let stopy = 20 + 180;
        ctx.arc(stopx, stopy, 20, 0, 2*Math.PI)           
        winner(stopx, ctx);                        
    }   
    ctx.fill()

    return ctx; 
}

