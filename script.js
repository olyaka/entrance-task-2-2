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

function closePopUp(evt) {
  evt.stopPropagation();
  document.querySelector(".overlay").style = "display:none";
  document.querySelector(".device.pop-up-container").classList.remove('pop-up-container');
  document.querySelector(".device .submit-container").style = "display:none";
}

document.querySelectorAll(".device").forEach(function(item) {
  item.addEventListener("click", function(evt) {
    document.querySelector(".overlay").style = "display:flex";

    evt.currentTarget.classList.add("pop-up-container");

    evt.currentTarget.appendChild(document.querySelector(".submit-container"));

    document.querySelector(".submit-container").style = "display:flex";

    evt.currentTarget.appendChild()


    document.querySelector(".apply").addEventListener("click", closePopUp);
    document.querySelector(".close").addEventListener("click", closePopUp);
  });
});
