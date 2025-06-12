//if we use % the height/width will be according to the parent
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

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
      left: dets.x - 40,
      top: dets.y - 50,
    });
  });
}
videoConAnimation();
function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.4,
    duration: 1,
    stagger: 0.2,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadingAnimation();
