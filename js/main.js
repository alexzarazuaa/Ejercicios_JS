
'use strict';//declare strict mode

import  {docReady} from './core/core.js';//import docReady;
import  './controlers/stopball.js';//import stopball

//globalState
let changeState = {stateApp:"stop"};

function main () {
    
     // DOM is loaded and ready for manipulation here
    let speed = 15; //1 to 100
    let incX = speed * (Math.round(Math.random())?1:-1);
    let incY = speed * (Math.round(Math.random())?1:-1);


         changeState.inicia = function(el) {
   
     
       
    
       let dw =function danceWorld(){
        
            let  x =  el.style.left?parseInt(el.style.left,10):350;
            let  y =  el.style.top?parseInt(el.style.top,10):400;
    
            el.style.left =  x + incX +"px";
            el.style.top = y + incY+"px";
        
            //Detect if we reach X coordinates limits
            if (((x+incX) > (window.innerWidth-40)) || ((x+incX)<=0))
                incX = (-1)*incX;
           
            //Detect if we reach Y coordinates limits
            if (((y+incY) > (window.innerHeight-40)) || ((y+incY) <= 0))
                incY = (-1)*incY;
        }
         return dw;
    };
    
    
    
     let start = function start(){
        changeState.stateApp="run"
        changeState.myApp=setInterval(inicia(document.getElementById("ball")),10);
    }
    
    

}

docReady(main);


//EXPORT FUNCTION START
export {changeState};








