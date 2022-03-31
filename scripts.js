// GSAP CHEATSHEET
// https://greensock.com/cheatsheet/

window.addEventListener("DOMContentLoaded", (event) => {
  // EXPAND FUNCTION
  const expandToggler = document.querySelector(".expand-toggler");
  const contentToExpand = document.querySelector(".content-to-expand");

  expandToggler.addEventListener("click", () => {
    if (contentToExpand.classList.contains("is-open")) {
      contentToExpand.removeAttribute("style");
      contentToExpand.classList.remove("is-open");
      expandToggler.textContent = "Rozwiń";
    } else {
      contentToExpand.style.height = contentToExpand.scrollHeight + "px";
      contentToExpand.classList.add("is-open");
      expandToggler.textContent = "Zwiń";
    }
  });
  // END EXPAND FUNCTION
});
