"use strict";

var deviceList = document.querySelectorAll('.device');
var favDevices = document.querySelector('.fav-container');

deviceList.forEach((item) => {
    var clone = item.cloneNode(true);
    favDevices.appendChild(clone);
});