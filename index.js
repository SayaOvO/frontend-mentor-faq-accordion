const btns = document.querySelectorAll(".accordion__title");

function toggle() {
  const open = this.getAttribute("aria-expanded");
  for (const btn of btns) {
    btn.setAttribute("aria-expanded", "false");
  }
  if (open === "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

for (const btn of btns) {
  btn.addEventListener("click", toggle);
}
