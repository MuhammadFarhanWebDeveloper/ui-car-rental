let hamburger = document.getElementById("hamburger");

let navitems = document.getElementById("navitems");
let navlink = document.querySelectorAll(".navlink");

hamburger.addEventListener("click", () => {
  navitems.classList.toggle("hidden");
});

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal("first-animate")
