var cursor = document.querySelector("#custom-cursor");
var blur = document.querySelector(".cursor-blur");

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});


window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out"
  });
});

// Animate on hover
document.querySelectorAll("a, button, .hover-target").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "100px";
    cursor.style.height = "100px";
    cursor.style.background = "rgba(255, 255, 255, 0.2)";
    cursorText.textContent = "CLICK";
    cursorText.style.opacity = 1;
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.width = "60px";
    cursor.style.height = "60px";
    cursor.style.background = "transparent";
    cursorText.textContent = "";
    cursorText.style.opacity = 0;
  });
});




gsap.to("#nav", {
  backgroundColor: "#FF5722",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  }
});

gsap.to("#main",{
  backgroundColor : "#000",
  scrollTrigger:{
    trigger:"#main",
    scroller: "body",
    // marker:true,
    start: "top -50%",
    end: "top -80%",
    scrub: 2
  }
})


gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});