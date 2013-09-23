//get the letter pressed and call the function
function onKeyDown(event){
	var toolChoose = event.key;
	
	switch(toolChoose){
		case "s":
		randomStar();
		break;
		
		case "d":
		stringOfBeads();
		break;
		
		
		default:
		break;
	}
}



//place star image randomly across the screen. 
function randomStar(){
		x = Math.floor(Math.random() * window.innerWidth + 1);
		y = Math.floor(Math.random() * window.innerHeight +1); 
		starSize = (Math.floor(Math.random() * 10 + 3)) * 0.1;
		starSize = starSize.toFixed(1);
		star = new Raster("http://localhost/src/paperplay/images/miro-Star.png");
		star.scale(parseFloat(starSize));
		star.position = new Point(x, y);
}


//drawing a string with circles on it
function stringOfBeads(){
		var beadString;
		var bead;
		
		
		function onMouseDown(event) {
				alert("works");
			beadString = new Path();
			beadString.strokeColor = "#111";
			beadString.strokeWidth = "3";
		}
		
		function onMouseDrag(event) {
			tool.minDistance = 40;
			beadString.add(event.point);
			bead = new Path.Circle({
				center: event.middlePoint,
				radius: event.delta.length/4
			});
				
			bead.fillColor = "#111";	
			
			simplify();
			smooth();
			
		}

}

//abstract shapes in several colors	
function makeColorShape(colorChoice){	
var colorShape = new Path;
var colorChoice = colorChoice;
		
		function onMouseDown(event){					
			colorShape = new Path;
			colorShape.strokeColor = "#111";
			colorShape.strokeWidth = 3;
		
		}
		function onMouseDrag(event){
			colorShape.add(event.point);
			
		}
		
		function onMouseUp(event){
			/*if(Key.isDown("b")){
				colorChoice = "#151C6C";
			}
			else if(Key.isDown("w")){
				colorChoice = "#FFF";
			}
			else{
				colorChoice = "#B88601";
			}*/
			colorShape.closed = true;
			colorShape.simplify();
			colorShape.smooth();
			colorShape.fillColor = colorChoice;
			colorShape.opacity = 0.8;
			colorShape.blendMode = "darker";
		}
		
}
	
		
