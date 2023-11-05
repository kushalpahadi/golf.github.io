"use strict";

const navtimeline = gsap.timeline(); //stacking animations

// on load animation
navtimeline.from(".nav h4", {
  duration: 0.3,
  opacity: 0,
  y: -10,
  stagger: 0.25,
});

//scroll trigger nav fixed
navtimeline.to(".nav", {
  backgroundColor: "#000",
  height: 110,
  paddingLeft: 200,
  duration: 0.4,

  scrollTrigger: {
    trigger: ".page2",
    // markers: true,
    start: "5% bottom", //top 5% of page 2 intersect bottom of vp
    end: "10% bottom",
    scrub: 1,
  },
});

// background of main

gsap.to(".main", {
  backgroundColor: "#000",

  scrollTrigger: {
    trigger: ".page2",
    // markers: true,
    start: "29% 85%", //top 29% of page 2 intersect top85% of vp
    end: "35% bottom",
    scrub: 5,
  },
});

//cursor
const crsr = document.querySelector(".cursor");
const crsrblur = document.querySelector(".cursorblur");

document.addEventListener("mousemove", function (e) {
  //   console.log(e); //gives mouse event
  //   console.log(e.x, e.y); //mouse posiiton x ang y ( left top)

  //   crsr.style.left = e.x - crsr.getBoundingClientRect().height / 2 + "px";
  //   crsr.style.top = e.y - crsr.getBoundingClientRect().height / 2 + "px";
  //   crsrblur.style.left =
  //     e.x - crsrblur.getBoundingClientRect().height / 2 + "px";
  //   crsrblur.style.top = e.y - crsrblur.getBoundingClientRect().height / 2 + "px";

  gsap.to(crsr, {
    x: e.x + 10 + "px",
    y: e.y + 10 + "px",
    delay: 0.1,
  });

  gsap.to(crsrblur, {
    x: e.x - crsrblur.getBoundingClientRect().height / 2 + "px",
    y: e.y - crsrblur.getBoundingClientRect().height / 2 + "px",
    delay: 0.1,
  });
});

//vannila tilt
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
});
