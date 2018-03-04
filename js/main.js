function init(color){

  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");

  canvas.style.width = window.innerWidth;
  canvas.style.height = window.innerHeight;

  ctx.fillStyle = color;
  ctx.fillRect(0,0, innerWidth, innerHeight);

}

function grid(){
  for (let i = 0; i < 25; i++){

  }
}


function refreshData() {
  x = 1;  // x = seconds
 	let d = new Date()
 	let h = d.getHours();
 	let m = d.getMinutes();
 	let s = d.getSeconds();

 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};

 	let	color = '#'+h+m+s;

  init(color);
    // $("div.background").css("background-color", color );
    // $("p#hex").text(color);

    setTimeout(refreshData, x*1000);
}


refreshData(); // execute function
