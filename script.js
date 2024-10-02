var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.2,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line-p1 , .line h2", {
  opacity: 0,
  onStart: function () {
    let h1timer = document.querySelector("#line-p1 h5");
    let grow = 0;

    setInterval(() => {
      if (grow < 100) {
        h1timer.innerHTML = grow++;
      } else {
        h1timer.innerHTML = grow;
      }
    }, 33);
  },
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3,
});
