$(function() {
  $("#sidebar").load("../../component/sidebar.html");
  $("#topbar-div").load("../../component/topbar.html");
});

// Menu Toggle

let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
let main = document.querySelector(".main");

// add hovered classn selected list item

let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach(item => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach(item => item.addEventListener("mouseover", activeLink));
