
function wallClock(){
	

	//Properties

	this.version = '1.0';

	//Methods
	this.init = function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			var clockTimer = setInterval(this.fnUpdateTime, 1000);	
			document.getElementById('wallclock').style.display = "block";
			document.getElementById('info').style.display = "none";
			this.fnMotionDevice();
		}
	}

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
	this.fnDetectTilt = function(param1, param2){
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
}
