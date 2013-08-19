// Create a Paper.js Path to draw a line into it:
var mypath = new Path();
// Give the stroke a color
mypath.strokeColor = 'black';
var start = new Point(100, 100);
// Move to start and draw a line from there
mypath.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
mypath.lineTo(start + [ 100, -50 ]);

var onePoint = new Point(10,20);
mypath.lineTo(onePoint);
mypath.closed = true;

var rect = new Path.Rectangle(new Point(50, 100), new Size(100, 200));
rect.fillColor = 'black';

var oneCircle = new Path.Circle(
	{
		center:[300, 400],
		radius: 65,
		fillColor: '#ffcc00',
		strokeColor: '#333',
		strokeWidth: '20',
	}
);

mypath.fillColor = '#cc2128';

var squareStyle = new Style({
	fillColor: '#fff',
	strokeWidth: 10,
	strokeColor: '00AA33',
	
})

var oneSquare = new Path.Rectangle({
	point: [500, 300],
	size: [50, 50]
});

oneSquare.style = squareStyle;

var miro = new Path;


function onMouseDown(event){
	miro = new Path;
	miro.strokeColor = "#000";
	miro.strokeWidth = 5;

}
function onMouseDrag(event){
	miro.add(event.point);
	
}

function onMouseUp(event){
	miro.closed = true;
	miro.smooth();
	miro.fillColor = '#0000CC';
	miro.opacity = 0.8;
}



