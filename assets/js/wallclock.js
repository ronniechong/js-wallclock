/********************************************************************************
The MIT License (MIT)

Copyright (c) 2014 Ronnie Chong
********************************************************************************/

function wallClock(offval){
	
	//Properties
	this.version = '1.0';
	this.offset = (offval==undefined)?0:offval;	//offset rotatex and rotatey

	//Methods
	this.init = function(){
		'user strict';
		//Check for mobile
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			var clockTimer = setInterval(this.fnUpdateTime, 1000);	
			document.getElementById('wallclock').style.display = "block";
			document.getElementById('info').style.display = "none";
			this.fnMotionDevice();
		}
	}

	//Get time
	this.fnUpdateTime = function(){
		'use strict';
		var currDate = new Date(),
			currHour = (currDate.getHours()>12)? currDate.getHours() - 12: (currDate.getHours()<10)? '0'+ currDate.getHours():currDate.getHours(),
			currMin = (currDate.getMinutes()<10)?'0'+currDate.getMinutes():currDate.getMinutes(),
			currSec = (currDate.getSeconds()<10)?'0'+currDate.getSeconds():currDate.getSeconds(),
			dayNight =(currDate.getHours()>=12)?'pm':'am';

		document.getElementsByClassName('hour')[0].innerHTML = currHour;
		document.getElementsByClassName('min')[0].innerHTML = currMin;
		document.getElementsByClassName('sec')[0].innerHTML = currSec;
		document.getElementsByClassName('day-night')[0].innerHTML = dayNight;
	}

	//Motion listeners
	this.fnMotionDevice = function(){
		var that = this;
		if (window.DeviceOrientationEvent) {
		    window.addEventListener("deviceorientation", function () {
		        that.fnDetectTilt([event.beta, event.gamma]);
		    }, true);
		} else if (window.DeviceMotionEvent) {
		    window.addEventListener('devicemotion', function () {
		        that.fnDetectTilt([event.acceleration.x * 2, event.acceleration.y * 2]);
		    }, true);
		} else {
		    window.addEventListener("MozOrientation", function () {
		        that.fnDetectTilt([orientation.x * 50, orientation.y * 50]);
		    }, true);
		}
	}

	//Animate wallclock
	this.fnDetectTilt = function(param1, param2){
		'use strict';
		if (typeof(param1)==='object'){
			document.getElementById('output').innerHTML = 'Tilt: Y='+Math.round(param1[0]) + ', X=' + Math.round(param1[1]);
			var rotX = (window.orientation==0) ? Math.round(param1[0] - this.offset):Math.round(param1[0]),
				rotY = (window.orientation==0) ? Math.round(param1[1]) : Math.round(param1[1]+this.offset),
				transformXY = 'rotateY('+rotY+'deg) rotateX('+rotX+'deg)';
				document.getElementById('wallclock').style.webkitTransform = transformXY;
				document.getElementById('wallclock').style.MozTransform = transformXY;
				document.getElementById('wallclock').style.msTransform = transformXY;
				document.getElementById('wallclock').style.OTransform = transformXY;
				document.getElementById('wallclock').style.transform = transformXY;
		}
	}
}
