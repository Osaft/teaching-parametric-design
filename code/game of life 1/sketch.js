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
let resolution = 10;

function setup() {
  background(0);
	createCanvas(1000,1000);
	cols = width/ resolution;
	rows = height / resolution
	grid = make2DArray(cols, rows);
	for (let i = 0; i< cols; i++){
		for (let j = 0; j< rows; j++){
				grid[i][j] = floor(random(2))
		}
	}
}



function draw() {
	background(255)
	// frameRate(20)
	for (let i = 0; i< cols; i++){
		for (let j = 0; j< rows; j++){
				let x = i * resolution
				let y = j * resolution 
				if (grid[i][j] == 1){
					fill(255)
				} else {
					fill(0)
			}
			rect(x, y, resolution-1, resolution-1)
		}
	}
	
	// computed and new 
	let next = make2DArray(cols,rows)
	
	
	for (let i = 0; i< cols; i++){
		for (let j = 0; j< rows; j++){
			let state = grid[i][j]
			
			// Edges
// 			if (i ==0 || i == cols-1 || j== 0 ||j == rows-1){
// 				next[i][j] = state
				
// 			} else {
			// apply rules!
			// silly 1
			// let sum = 0
			// sum += grid[i-1][j-1]
			// sum += grid[i-1][j]
			// sum += grid[i-1][j+1]
			// sum += grid[i][j-1]
			// sum += grid[i][j+1]
			// sum += grid[i+1][j-1]
			// sum += grid[i+1][j]
			// sum += grid[i+1][j11]
			// function
			let sum
			let neighbors = countNeighbors(grid, i ,j)
			
			
			if(state == 0 && neighbors == 3){
				next[i][j] = 1
			}else if (state == 1 && (neighbors < 2 || neighbors >3)){
				next[i][j] = 0
			} else{
				next[i][j] = state;
			}
		}
			
		// }
	}
	grid = next
}
	
	
function countNeighbors(grid, x, y){
	let sum = 0
	for( let i = -1;  i< 2; i++){
		for( let j = -1;  j< 2; j++){
			
			let col = (x+i+ cols) % cols;
			let row = (y+j+ rows) % rows;
										 
			sum += grid[col][row]
		}
	}
	sum -= grid[x][y]
	return sum
}