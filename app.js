// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let buttonToggle = document.querySelector(".nav-toggle");
let checkLink = document.querySelector(".links");

buttonToggle.addEventListener("click", function () {
  console.log("button clicked");
  if (!checkLink.classList.contains("show-links")) {
    checkLink.classList.add("show-links");
  } else checkLink.classList.remove("show-links");
});

console.log(buttonToggle.classList.contains("nav-toggle"));
