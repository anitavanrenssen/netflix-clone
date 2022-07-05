import { User } from "../classes/User.js";

/*************************
 * VARIABLES
 *************************/

const form = document.querySelector("#login-form");
const inputUsername = document.querySelector("#username");
const LOGGEDIN_USER_KEY = "loggedin-user-storage-key";
let userArray = [];

/*************************
 * EVENT LISTENERS
 *************************/

form.addEventListener("submit", function (event) {
  event.preventDefault();
  loggedInUser(inputUsername.value);
  window.location.href = "./src/pages/home.html";
});

/*************************
 * FUNCTIONS
 *************************/

function loggedInUser(username) {
  if (username !== "") {
    let loggedInUser = new User(username);
    userArray.push(loggedInUser);
    addToLocalStorage(userArray);
  }
}

/*************************
 * LOCAL STORAGE
 *************************/

function addToLocalStorage(userArray) {
  userArray = JSON.stringify(userArray);
  localStorage.setItem(LOGGEDIN_USER_KEY, userArray);
}
