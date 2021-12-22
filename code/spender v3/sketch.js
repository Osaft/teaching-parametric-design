function make2DArray(cols,rows){
	let arr = new Array(cols);
	for(let i=0; i<arr.length; i++){
		arr[i] = new Array(rows);
		// for( j=0; j<rows; j++){
		// 	arr.push()
		// }
	}
	return arr
}


let grid
let cols, rows;
let resolution = 20;
let xoff = 0;
let yoff = 0;
let zoff = 0;
function setup() {
	createCanvas(1500,840);
	
}

function draw() {
  // noLoop();
  	cols = width/ resolution;
	rows = height / resolution
	grid = make2DArray(cols, rows);
  // frameRate(4);

	for (let i = 0; i< cols; i++){
    xoff = 0;
		for (let j = 0; j< rows; j++){

				grid[i][j] = round(noise(xoff,yoff,zoff)*6);

        // für res 1:
        // xoff = xoff+0.002;

        xoff = xoff+0.02;
        
		}
    // für res 1:

    // yoff = yoff+0.002;
    yoff = yoff+0.02;
    
    
	}
  yoff = 0;
  xoff = 0;
  zoff = zoff +0.01
  strokeWeight(0);
	background(255)
	// frameRate(20)
	for (let i = 0; i< cols; i++){
		for (let j = 0; j< rows; j++){
				let x = i * resolution
				let y = j * resolution 
				if (grid[i][j] == 1){
					fill("#2b2d42")
      
				}if (grid[i][j] == 2){
					fill("#8d99ae")
      
				}if (grid[i][j] == 3){
					fill("#edf2f4")
      
				}if (grid[i][j] == 4){
					fill("#ef233c")
         
        }if (grid[i][j] == 5){
					fill("#d90429")

         }if (grid[i][j] == 6){
					fill(0);
         }
        
			rect(x, y, resolution, resolution);
		}

	}
 
}
