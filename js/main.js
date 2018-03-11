let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let grid = [];
let colors = [];
let ttz = 25;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth/25;

function createTimeZone(color){
  for (let i = 0; i < ttz; i++){
    ctx.fillStyle = color;
    ctx.fillRect((i * w) ,0, w-5, canvas.height);
    // grid.push(ttz[i]);
    // console.log(grid[5]);
  }
}

function refreshData() {

 	let d = new Date()
 	let h = d.getHours();
 	let m = d.getMinutes();
 	let s = d.getSeconds();

 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};

  for(let i = 0; i < ttz; i++){

    colors.push(ttz[i]);
    console.log(colors[5]);
  }
 	let	color = '#'+h+m+s;

  createTimeZone(color);

    // $("div.background").css("background-color", color );
    // $("p#hex").text(color);

    setTimeout(refreshData, 1000);
}

refreshData(); // execute function
