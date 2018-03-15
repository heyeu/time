let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let grid = [];
let hours = [];
let colors = [];
let newH = 0;
let gridID = 0;
let colorID = 0;
let color;
let totalTimeZones = 25;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w = window.innerWidth/25;

function displayTimeZone(colors){
  for (let i = 0; i < totalTimeZones; i++){
    ctx.fillStyle = colors[i];
    ctx.fillRect((i * w) ,0, w-5, canvas.height);
  }
}

function assignTimeZone(colors){
  for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
    displayTimeZone(colors);
  }

}

function fetchColor() {

  //converting time value to colors
 	let d = new Date()
 	let h = d.getHours();
 	let m = d.getMinutes();
 	let s = d.getSeconds();



  for (let i = -12; i < 12; i++){
    let newH = (h+i)*3;
    if (newH > 24) {
      newH = newH - 24 ;
    };
    if (newH<=9) {newH = '0'+newH};
    if (m<=9) {m = '0'+m};
    if (s<=9) {s = '0'+s};
    color = '#' + newH + m + s;
    colors.push(color);
  }

  // console.log(colors.splice(0,24));
  assignTimeZone(colors.splice(0,24));
  // return;

  setTimeout(fetchColor, 1000);
}

// fetchColorId();
fetchColor(); // execute function
