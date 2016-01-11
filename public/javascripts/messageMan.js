$("#add").click(function(){
	console.log("circle added");
	d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
});

$("#change").click(function(){
	console.log("circle changed");
	var circles = document.getElementsByTagName("circle");
	console.log(circles.length > 0);
	for (var i = 0; i < circles.length; i++) {
	  var circle = circles.item(i);
	  circle.style.setProperty("fill", "red", null);
	}
});