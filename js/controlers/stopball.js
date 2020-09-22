import {start} from "../main";

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if (changeState.stateApp=="run"){
            changeState.stateApp ="stop";
            clearInterval();
        }else{            
            start();
        }
    }
}