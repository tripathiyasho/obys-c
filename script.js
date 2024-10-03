function loader() {
  var tl = gsap.timeline();

  // Animate elements within the loader
  tl.from(".line h1 ", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line-p1 ", {
    opacity: 0,
    onStart: function () {
      let h1timer = document.querySelector("#h5");
      let grow = 0;

      setInterval(() => {
        if (grow < 100) {
          h1timer.innerHTML = grow++;
        } else {
          h1timer.innerHTML = grow;
        }
      }, 15);
    },
  });

  tl.to(" #h2", {
    opacity: 1,
  });

  tl.from(" #line2", {
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
  });
  
  tl.to("#loader", {
    ease: "circ.inOut",
    opacity: 0,
    duration: 2.5,
     });

  tl.from("#page1", {
    y: 1600,
    delay: 0.3,
    opacity: 0,
    duration: 0.5,
    ease: power4,
  });

  tl.to("#loader", {
    display: "none",
  });
}

loader();
