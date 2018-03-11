<!DOCTYPE html>
<html lang="en">
<!--
My coding philosophy
__          ___    _       _______ ________      ________ _____   __          ______  _____  _  __ _____
\ \        / / |  | |   /\|__   __|  ____\ \    / /  ____|  __ \  \ \        / / __ \|  __ \| |/ // ____|
 \ \  /\  / /| |__| |  /  \  | |  | |__   \ \  / /| |__  | |__) |  \ \  /\  / / |  | | |__) | ' /| (___
  \ \/  \/ / |  __  | / /\ \ | |  |  __|   \ \/ / |  __| |  _  /    \ \/  \/ /| |  | |  _  /|  <  \___ \
   \  /\  /  | |  | |/ ____ \| |  | |____   \  /  | |____| | \ \     \  /\  / | |__| | | \ \| . \ ____) |
    \/  \/   |_|  |_/_/    \_\_|  |______|   \/   |______|_|  \_\     \/  \/   \____/|_|  \_\_|\_\_____/
-->

<!--EDIT: And, since you are already here, check out this too: http://www.jacopocolo.com/hottercolder/-->

<!--EDIT2: Okay, this little thing is being shared beyond imagination and it's time to cash in: I'm looking for an entry job in interaction design, even an internship. If you like hexclock and hottercolder, here's my portfolio: http://www.jacopocolo.com/portfolio-->

<!--EDIT3: The code for the hexclock is up on Github under MIT License: https://github.com/jacopocolo/Hex-clock-->

<!--EDIT4: I almost forgot: there's also a screensaver version of this page. http://www.jacopocolo.com/hexclock/screensaver.html There's no screensaver download, you have to use one of those programs that allow you set a webpage as a screensaver to use this but… hey, it's better than nothing, right? <3
-->
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=yes" />
<title>Hex clock</title>
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<meta name="Keywords" content="Jacopo Col&ograve;, Jacopo Colo, hex, clock, hexadecimal, colors" />
<meta name="description" content="A precise hexadecimal color clock that goes the whole 24 hours color range, from #000000 to #235959.">
<script src="http://code.jquery.com/jquery-latest.js"></script>
<link href='http://fonts.googleapis.com/css?family=Lato:100,300' rel='stylesheet' type='text/css'>
<meta name="apple-mobile-web-app-capable" content="yes">

<link rel="apple-touch-icon-precomposed" sizes="57x57" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://www.jacopocolo.com/hexclock/apple-touch-icon-152x152.png">
<link rel="icon" type="image/png" href="http://www.jacopocolo.com/hexclock/favicon-196x196.png" sizes="196x196">
<link rel="icon" type="image/png" href="http://www.jacopocolo.com/hexclock/favicon-160x160.png" sizes="160x160">
<link rel="icon" type="image/png" href="http://www.jacopocolo.com/hexclock/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="http://www.jacopocolo.com/hexclock/favicon-16x16.png" sizes="16x16">
<link rel="icon" type="image/png" href="http://www.jacopocolo.com/hexclock/favicon-32x32.png" sizes="32x32">
<meta name="msapplication-TileColor" content="#000000">
<meta name="msapplication-TileImage" content="http://www.jacopocolo.com/hexclock/mstile-144x144.png">


<meta property="og:image" content="http://www.jacopocolo.com/hexclock/preview.jpg"/>
<style>
html body {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
}
.background {
	width: 100%;
	height: 100%;
	position: absolute;
	vertical-align: middle;
}

#hex {
	color: white;
	font-family: 'Lato', Helvetiva, Arial, sans-serif;
	text-align: center;
	font-size: 4.5em;
	display: block;
	min-width: 200px;
	font-weight: 100;
}

#what {
	color: rgba(255, 255, 255, 0.90);
	font-family: 'Lato', Helvetica, Arial, sans-serif;
	display: block;
	font-size: 0.9em;
	position: absolute;
	bottom: 0px;
	left: 10px;
	padding-right: 10px;
	font-weight: 300;
}

#what a {
	color: inherit;
}

#question, #tweet {
	text-decoration: none;
}

.absolute-center {
	/*width: 50%;*/
  	margin: auto;
  	position: absolute;
  	top: 50%; left: 50%;
  	-webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}

</style>
</head>
<body>
  <div class="background">

  <div class="absolute-center">
    <p id="hex"></p>
  </div>

  </div>
</body>


<script>
function refreshData()
{
    x = 1;  // x = seconds
 	var d = new Date()
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();

 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};

 	var	color = '#'+h+m+s;

    $("div.background").css("background-color", color );
    $("p#hex").text(color);

    setTimeout(refreshData, x*1000);
}

refreshData(); // execute function
</script>
</html>
