"use strict";

var deviceList = document.querySelectorAll(".device");
var favDevices = document.querySelector(".fav-container");
var categories = document.querySelectorAll(".category");

deviceList.forEach(item => {
  var clone = item.cloneNode(true);
  favDevices.appendChild(clone);
});

categories.forEach(item => {
  item.addEventListener("click", function(evt) {
    if (evt.currentTarget.classList.contains("clicked")) {
      evt.currentTarget.classList.remove("clicked");
    } else {
      evt.currentTarget.classList.add("clicked");
      var currentCategory = item.classList[1];
      favDevices.childNodes.forEach(function(dev) {
        if (dev.classList && dev.classList.contains("device")) {
          if (
            !dev.classList.contains(currentCategory) &&
            currentCategory !== "all"
          ) {
            if (categories[0].classList.contains("clicked")) {
              categories[0].classList.remove("clicked");
            }
            dev.style = "display: none";
          } else {
            dev.style = "display: flex";
          }
        }
      });
    }
  });
});

document.querySelector(".arrow-left").addEventListener("click", function() {
  console.log("left");
  favDevices.scrollLeft += 100;
});

document.querySelector(".arrow-right").addEventListener("click", function() {
  console.log("right");
  favDevices.scrollLeft -= 100;
});

var template = document.querySelector("#pop-up-template");

function closePopUp() {
  document.querySelector(".overlay").style = "display:none";
}

document.querySelectorAll(".device").forEach(function(item) {
  item.addEventListener("click", function(evt) {
    document.querySelector(".overlay").style = "display:flex";

    // document
    //   .querySelector(".overlay")
    //   .insertAdjacentElement("afterbegin", evt.currentTarget);
    evt.currentTarget.classList.add("pop-up-container");

    // var clone = template.content.cloneNode(true);
    // document.querySelector("body").appendChild(clone);
    // document.querySelector(".name").innerText = evt.currentTarget.querySelector(
    //   "h1"
    // ).innerText;
    // document.querySelector(
    //   ".state"
    // ).innerText = evt.currentTarget.querySelector("p").innerText;

    // document.querySelector(".apply").addEventListener("click", closePopUp);
    // document.querySelector(".close").addEventListener("click", closePopUp);
  });
});
