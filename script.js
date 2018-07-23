"use strict";

var deviceList = document.querySelectorAll('.device');
var favDevices = document.querySelector('.fav-container');
var categories = document.querySelectorAll('.category');

deviceList.forEach((item) => {
    var clone = item.cloneNode(true);
    favDevices.appendChild(clone);
});

categories.forEach((item) => {
        item.addEventListener('click', function() {
            if (document.querySelector('.clicked')) {
                document.querySelector('.clicked').classList.remove('clicked');
            }
            item.classList.add('clicked');
            var currentCategory = item.classList[1];
            favDevices.childNodes.forEach(function(dev) {
                if(dev.classList && dev.classList.contains('device')) {
                    console.log(dev);
                    if (!dev.classList.contains(currentCategory) && currentCategory !== 'all') {
                        dev.style = 'display: none';
                    } else {
                        dev.style = 'display: flex';
                    } 
                }
            });
        });
});