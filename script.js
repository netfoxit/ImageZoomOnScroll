console.clear();
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      markers: true // Set to false if you don't need markers for debugging
    }
  })
  .to("img", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut"
  })
  .to(".section.hero", {
    scale: 1.1,
    transformOrigin: "center center",
    ease: "power1.inOut"
  }, "<"); // "<" indicates to start this animation at the same time as the previous one
});
