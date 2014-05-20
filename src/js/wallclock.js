
window.onload = function(e){ 
	init();
}

function init(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		document.getElementById('more').innerHTML = 'Device: ' + navigator.userAgent;
		var clockTimer = setInterval(fnUpdateTime, 1000);	
		fnMotionDevice();
	}else{
		document.getElementById('more').innerHTML = 'You need a compatible mobile device to test this page';
	}
	
}

function fnMotionDevice(){
	if (window.DeviceOrientationEvent) {
		document.getElementById('type').innerHTML = 'Method: DeviceOrientationEvent';
	    window.addEventListener("deviceorientation", function () {
	        fnDetechTilt([event.beta, event.gamma]);
	    }, true);
	} else if (window.DeviceMotionEvent) {
		document.getElementById('type').innerHTML = 'Method: DeviceMotionEvent';
	    window.addEventListener('devicemotion', function () {
	        fnDetechTilt([event.acceleration.x * 2, event.acceleration.y * 2]);
	    }, true);
	} else {
	    window.addEventListener("MozOrientation", function () {
	        fnDetechTilt([orientation.x * 50, orientation.y * 50]);
	    }, true);
	}
}

function fnDetechTilt(param1, param2){
	'use strict';
	if (typeof(param1)==='object'){
		document.getElementById('output').innerHTML = 'Tilt: Y='+Math.round(param1[0]) + ', X=' + Math.round(param1[1]);
		var rotX = Math.round(param1[0]),
			rotY = Math.round(param1[1]);
		document.getElementById('wallclock').style.webkitTransform  = 'rotateY('+rotY+'deg) rotateX('+rotX+'deg)';
		document.getElementById('wallclock').style.transform  = 'rotateY('+rotY+'deg) rotateX('+rotX+'deg)';
		//document.getElementById('wallclock').style.webkitTransform  = 'rotateY('+Math.round((param1[1])*-1)+'deg)';
		
	}else{
		document.getElementById('output').innerHTML = param1 + ',' + param2;
	}
}

function fnUpdateTime(){
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