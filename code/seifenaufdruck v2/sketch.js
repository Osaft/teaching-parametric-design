let res;
let pixelSize = 2;
let backgroundColor = 0;
let colors = ["#f2132d", "#f29113", "#f2df13", "#13f256", "#138af2", "#d243f2", 0, 255, 0, 255, 0, 255, 0, 255, 0];

let completeImg, fillingImg;
let idx;

function setup() {
	createCanvas(500, 500);
	
	completeImg = createGraphics(width, height);
	completeImg.background(backgroundColor);
	completeImg.noStroke();
	
	fillingImg = createGraphics(width, height);
	fillingImg.background(backgroundColor);
	fillingImg.noStroke();
	//fillingImg.colorMode(HSB, 1);
	
	res = 1/random(400, 500);
	idx = width;
	
	for (let x = 0; x < width; x += pixelSize) {
		drawColumn(x, completeImg);
	}
}

function draw() {
	drawColumn(idx, fillingImg);
	
	image(completeImg, -idx%width, 0);
	image(fillingImg, width - idx%width, 0);
	
	idx += pixelSize;
	if (idx % width === 0) {
		// copy fillingImg into completeImg:
		completeImg.image(fillingImg, 0, 0);
		// reset fillingImg:
		fillingImg.background(backgroundColor);
	}
}

function drawColumn(x, img) {
	let noice, digit, c;
	for (let y = 0; y < height; y += pixelSize) {
		noice = noise(x * res, y * res);
		digit = floor(noice * 90);
		let c = colors[digit%colors.length];
		
		img.fill(c);
		img.square(x%width, y, pixelSize);
	}
}
