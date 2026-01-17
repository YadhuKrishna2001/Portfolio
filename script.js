/* ================= MENU ================= */
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu-content a");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* Close menu on link click */
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

/* Close on ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});

/* Close on outside click */
menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    menu.classList.remove("active");
  }
});

/* ================= CURSOR GLOW ================= */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
  glow.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  glow.style.opacity = "0";
});

/* ================= SECTION HIGHLIGHT ================= */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
