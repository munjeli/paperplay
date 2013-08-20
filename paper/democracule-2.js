var circStyle = new Style({
	strokeWidth: 10,
	strokeColor: '#F7853A'
})

var citWork = new Path.Circle({
	center:[200, 55],
	radius: 50
});

var citPro = new Path.Line({
	from: [200, 105],
	to:[200,175]
});

var proPort = new Path.Circle({
	center:[200, 225],
	radius: 50
});

var donPro = new Path.Line({
	from: [165, 260],
	to:[95,315]
});

var donMag =new Path.Circle({
	center:[55, 345],
	radius: 50
});

var crePro = new Path.Line({
	from: [240, 260],
	to:[300,315]
});

var creCom = new Path.Circle({
	center:[345, 345],
	radius: 50
});

/*var democracule = new CompoundPath([citWork, proPort, donMag, creCom]);

democracule.style = circStyle;*/
proPort.style = circStyle;

var text = new PointText(new Point(10, 10));
text.justification = 'left';
text.fillColor = 'black';

var mousePath = new Path;
var proWidth;

function onMouseMove(event){
	mousePath.position = event.point;
	mouseRelX = Math.round(mousePath.position.x);
	mouseRelY = Math.round(mousePath.position.y);
	proWidth = mouseRelX + mouseRelY;
	text.content = proWidth;
}

var bigCircle;
proPort.onMouseEnter = function(event){
	bigCircle = new Path.Circle({
		center:[200, 225],
	    radius: 100,
	});
	bigCircle.style= circStyle;
	bigCircle.onMouseLeave = function(event){
		this.remove();
	}
}



