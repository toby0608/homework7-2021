var video;
var volume

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("video");
	volume = document.querySelector("#volume");
	console.log("Starting")
	console.log(video.volume)
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play()
	volume.innerHTML = (video.volume)*100 + "%"
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate=video.playbackRate*.5;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate/.98;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if(video.ended){
		video.currentTime = 0;
		vidoe.play();
	}
	console.log("Current location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		console.log("Unmuted")
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		console.log("Muted")
		video.muted= true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("#volume");
	console.log(this)
	console.log(this.value)
	volume.innerHTML = this.value + "%"
	video.volume = (this.value)/100
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool")
});



