const root = document.documentElement;
const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const themeToggle = document.getElementById("theme-toggle");
const moveTop = document.getElementById("move-top");
const nav = document.getElementById("site-nav");
const track = document.getElementById("testimonial-track");
const dotsHost = document.getElementById("slider-dots");
const prevButton = document.getElementById("prev-testimonial");
const nextButton = document.getElementById("next-testimonial");

let currentSlide = 0;
const cards = Array.from(track.children);

function syncHeader() {
  const scrolled = window.scrollY > 20;
  header.classList.toggle("scrolled", scrolled);
  moveTop.classList.toggle("visible", scrolled);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const savedTheme = localStorage.getItem("hippowize-theme");
if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  if (nextTheme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
  localStorage.setItem("hippowize-theme", nextTheme);
});

moveTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateDots() {
  dotsHost.querySelectorAll("button").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = (index + cards.length) % cards.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}

cards.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
  dot.addEventListener("click", () => goToSlide(index));
  dotsHost.appendChild(dot);
});

prevButton?.addEventListener("click", () => goToSlide(currentSlide - 1));
nextButton?.addEventListener("click", () => goToSlide(currentSlide + 1));

goToSlide(0);
syncHeader();

window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    closeMenu();
  }
});
