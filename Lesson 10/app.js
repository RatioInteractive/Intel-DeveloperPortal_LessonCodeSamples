document.addEventListener('DOMContentLoaded', function() {

	var paper
	  , image
	  , transformerOptions
	  , transformer
	  , ww = window.innerWidth
	  , wh = window.innerHeight;

	// Creates canvas 320 × 200 at 10, 50
	paper = Raphael(
		0, // x
		0, // y
		ww, // width
		wh // height
	);

	// Creates image at x = 50, y = 40, with radius 10
	image = paper.image(
		'logo.svg',
		ww / 4,
		wh / 4,
		ww / 2,
		wh / 2
	);
	image.attr({cursor:'pointer'});

	// here's the setting that comic director uses on it's svg canvas items
	transformerOptions = {
		keepRatio:  ['axisX','axisY'],
        draw:       ['image'],
        scale:      ['axisX', null],
        rotate:     ['axisX', null],
        drag:       [null, 'self']
	}

	// set transform ability on the image with options
	transformer = paper.freeTransform(image, transformerOptions);

});