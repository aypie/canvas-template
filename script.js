CanvasElement = document.getElementById("Main");
Canvas = CanvasObject.getContext("2d");

function Frame() {
	// Do stuff here
	requestAnimationFrame(Frame);
}

function Resize() {
    CanvasObject.width = window.innerWidth;
    CanvasObject.height = window.innerHeight;
}

window.addEventListener("resize", Resize);

Resize();
Frame();
