import {changeState} from "../main.js";


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if (changeState.stateApp=="run"){
            changeState.stateApp ="stop";
            clearInterval(changeState.myapp);
        }else{            
            changeState.myApp=setInterval(changeState.inicia(document.getElementById("ball")),10);
        }
    }
}