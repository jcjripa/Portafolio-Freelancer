// animacion a los skills

const bar1 = document.getElementById("bar1"),
      bar2 = document.getElementById("bar2"),
      bar3 = document.getElementById("bar3"),
      bar4 = document.getElementById("bar4"),
      bar5 = document.getElementById("bar5")

function animateBar(e, mw) {
  const smallBP = matchMedia("(max-width:991px)");
  const desktopBP = matchMedia("(min-width:992px)");
  if (scrollY >= 816 && smallBP.matches) {
    e.style.animation = "animateBar 2s ease-in-out";
    e.style.maxWidth = mw;
  } else if (scrollY >= 372 && desktopBP.matches) {
    e.style.animation = "animateBar 2s ease-in-out";
    e.style.maxWidth = mw;
  } else {
    e.style.animation = "none";
    e.style.maxWidth = mw;
  }
}

addEventListener("scroll", () => animateBar(bar1, bar1.textContent));
addEventListener("scroll", () => animateBar(bar2, bar2.textContent));
addEventListener("scroll", () => animateBar(bar3, bar3.textContent));
addEventListener("scroll", () => animateBar(bar4, bar4.textContent));
addEventListener("scroll", () => animateBar(bar5, bar5.textContent));
