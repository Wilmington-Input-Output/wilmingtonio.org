(function () {
  var audio = document.getElementById("bg-audio");
  var btn = document.getElementById("audio-toggle");

  if (!audio || !btn) {
    return;
  }

  var playIcon = btn.querySelector(".icon-play");
  var pauseIcon = btn.querySelector(".icon-pause");

  function render() {
    var playing = !audio.paused && !audio.ended;
    btn.setAttribute("aria-pressed", playing ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      playing ? "Pause music" : "Play music"
    );

    if (playing) {
      playIcon.setAttribute("hidden", "");
      pauseIcon.removeAttribute("hidden");
      return;
    }

    pauseIcon.setAttribute("hidden", "");
    playIcon.removeAttribute("hidden");
  }

  btn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play().catch(function () {});
      return;
    }

    audio.pause();
  });

  audio.addEventListener("play", render);
  audio.addEventListener("pause", render);
  audio.addEventListener("ended", render);

  render();
})();
