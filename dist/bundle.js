/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	
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










/***/ })
/******/ ]);