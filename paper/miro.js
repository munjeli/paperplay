
// Create a Paper.js Path to draw a line into it:		
var blueShape = new Path;
		
		
		function onMouseDown(event){
			blueShape = new Path;
			blueShape.strokeColor = "#111";
			blueShape.strokeWidth = 3;
		
		}
		function onMouseDrag(event){
			blueShape.add(event.point);
			
		}
		
		function onMouseUp(event){
			blueShape.closed = true;
			blueShape.simplify();
			blueShape.smooth();
			blueShape.fillColor = '#0000CC';
			blueShape.opacity = 0.8;
		}
		

		
		
