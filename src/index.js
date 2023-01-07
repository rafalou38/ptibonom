/**  @type {HTMLVideoElement} */
const video = document.querySelector("#video");
/**  @type {HTMLImageElement} */
const cover = document.querySelector("#cover");

cover.addEventListener("click", () => {
  cover.style.display = "none";
  video.style.display = "block";
  video.hidden = false;
  //   setTimeout(() => video.play(), 100);
  video.play();
});
