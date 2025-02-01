window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

function ToggleAudio() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    Image;
  } else {
    audio.pause();
  }
}
