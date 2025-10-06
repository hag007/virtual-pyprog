document.addEventListener("DOMContentLoaded", () => {
  const toolbar = document.querySelector(".bd-header__toolbar");
  const nav = document.querySelector(".navbar-end, .navbar-right, .bd-header__inner");
  if (toolbar && nav) nav.appendChild(toolbar);
});