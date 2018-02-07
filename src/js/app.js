
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();

TweenMax.to('.plant-glow', 3, {
	opacity: 1,
	repeat: -1,
	yoyo: true

})

TweenMax.to('.small-pink-glow', 2, {
     opacity: 1,
     repeat: -1,
     yoyo: true

})

TweenMax.to('.large-pink-glow', 4, {
     opacity: 1,
     repeat: 10,
     yoyo: true

})

TweenMax.to('.face-dots-1', 4, {
     opacity: 1,
     repeat: -1,
     yoyo: true

})

TweenMax.to('.face-dots-2', 2, {
     opacity: 1,
     repeat: -1,
     yoyo: true

})




var gridWidth = window.innerWidth;
var gridHeight = 100;
Draggable.create("body", {

    type:"x", //"x,y",
    edgeResistance:0.65,
    bounds:"",
    lockAxis:true,
    liveSnap: false,
    throwProps:true,
    snap: {
        x: function(endValue) {
            return Math.round(endValue / gridWidth) * gridWidth;

        },
        // y: function(endValue) {
        //     return Math.round(endValue / gridHeight) * gridHeight;
        // }
    }

});