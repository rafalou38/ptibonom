let VIDEO = "/static/2023/video.mp4";
let COVER = "/static/2023/cover.png";

/**  @type {HTMLVideoElement} */
const video = document.querySelector("#video");
/**  @type {HTMLImageElement} */
const cover = document.querySelector("#cover");
cover.addEventListener("click", () => {
  setMode("play");
});

function setMode(mode) {
  if (mode === "cover") {
    cover.style.display = "block";
    video.style.display = "none";
    video.hidden = true;
  } else {
    cover.style.display = "none";
    video.style.display = "block";
    video.hidden = false;
    //   setTimeout(() => video.play(), 100);
    video.play();
  }
}

function loadYear(year) {
  video.src = VIDEO.replace(/\d{4}/, year);
  cover.src = COVER.replace(/\d{4}/, year);
  setMode("cover");
}

loadYear(2023);

// // Archives
// /** @type {HTMLDivElement[]} */
// const cards = document.querySelectorAll(".card");

// cards.forEach((e) => e.addEventListener("click", () => {}));
