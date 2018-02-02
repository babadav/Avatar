
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();

TweenMax.to('.plant-glow', 3, {
	opacity: 1,
	repeat: 10,
	yoyo: true

})

var gridWidth = 200;
var gridHeight = 100;
Draggable.create("body", {

    type:"x,y",
    edgeResistance:0.65,
    bounds:"",
    lockAxis:true,
    liveSnap: true,
    throwProps:true,
    snap: {
        x: function(endValue) {
            return Math.round(endValue / gridWidth) * gridWidth;

        },
        y: function(endValue) {
            return Math.round(endValue / gridHeight) * gridHeight;
        }
    }

});