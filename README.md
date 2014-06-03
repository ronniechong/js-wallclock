##js-wallclock##

An experimentation on mobile motion event

###Demo###

This is only viewable on mobile devices

http://ronniechong.github.io/js-wallclock/

###Usage###
* Include the CSS and JS scripts at the bottom of the body
* Instantiate wallClock class



        <script type="text/javascript">
           var wallClock = new wallClock(50);
           wallClock.init();
        </script>


###Parameters###
`var wallClock = new wallClock(offsetvalue);` where *offsetvalue* is a value to offset the tilt for RotateX and RotateY 


###Devices/OS Tested ###
Devices | Operating System | Web Browser |Outcome
:--|:--|:--|:--
Nexus 5 | Android 4.4 | Chrome | OK
Nexus 4 | Android 4.4 | Chrome | OK
Nexus 4 | Andriod 4.4 | Dolphin | Buggy
iPod Generation 5 | iOS7 | Safari | OK
Samsung Galaxy S3 | Android 4.3 | Stock | OK
Samsung Galaxy S3 | Android 4.0 | Stock | OK
