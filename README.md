##js-wallclock##

An experimentation on mobile motion event

###Demo###

This is only viewable on mobile devices

http://ronniechong.github.io/js-wallclock/

###Usage###
* Include the CSS and JS scripts at the bottom of the body
* Instantiate wallClock class

      `var wallClock = new wallClock(50);`
      
      `wallClock.init();`


###Parameters###
`var wallClock = new wallClock(offsetvalue);` where *offsetvalue* is to a value to offset the tilt for RotateX and RotateY 


###Devices/OS Tested ###
Devices | OS | Web Browser |Outcome
:--|:--|:--|:--
Nexus 4 | Android 4.4 | Chrome | OK
Nexus 4 | Andriod 4.4 | Dolphin | Buggy
iPod Gen5 | iOS7 | Safari | OK
