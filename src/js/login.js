/*************************
 * VARIABLES
 *************************/

const form = document.querySelector("#login-form");

/*************************
 * EVENT LISTENERS
 *************************/

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "./src/pages/home.html";
});
