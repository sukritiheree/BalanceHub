//if we use % the height/width will be according to the parent
function videoConAnimation() {
  const videoCon = document.querySelector("#video-container");
  const playbtn = document.querySelector("#play");
  videoCon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videoCon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 50,
      top: dets.y - 50,
    });
  });
}
videoConAnimation();
