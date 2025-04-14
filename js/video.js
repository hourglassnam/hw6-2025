// Global variable for the video
var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  // Get the video element and configure it
  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;
  video.load(); // re-loads video to apply changes
});


// ▶️ Play the video
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.getElementById("volume").innerText = `${video.volume * 100}%`;
});


// ⏸ Pause the video
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});


// 🐢 Slow down video speed
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("New speed:", video.playbackRate.toFixed(5));
});


// 🐇 Speed up video speed
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("New speed:", video.playbackRate.toFixed(5));
});


// ⏩ Skip ahead 10 seconds
document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log("Current time:", video.currentTime.toFixed(2));
});


// 🔇 Mute / Unmute
document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  this.innerText = video.muted ? "Unmute" : "Mute";
});


// 🔊 Volume slider
document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.getElementById("volume").innerText = `${video.volume * 100}%`;
});


// 🎞 Add oldSchool class
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});


// 💡 Remove oldSchool class
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
