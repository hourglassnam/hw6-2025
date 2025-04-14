let video;

window.addEventListener("load", function () {
  console.log("Page loaded");

  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;
  video.load();

  // 초기 볼륨 표시
  document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
});

// Play
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
});

// Pause
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

// Slow down
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("Speed is now " + video.playbackRate.toFixed(5));
});

// Speed up
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("Speed is now " + video.playbackRate.toFixed(5));
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log("Current time: " + video.currentTime.toFixed(2));
});

// Mute / Unmute
document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    this.innerHTML = "Mute";
  } else {
    video.muted = true;
    this.innerHTML = "Unmute";
  }
});

// Volume slider
document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
});

// Add oldSchool class
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

// Remove oldSchool class
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
