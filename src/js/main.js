"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const key = new Date () .toISOString() .slice (0, 10);

const count = document.querySelector('.water__counter--js');
// const plus = document.querySelector('.button__plus--js');
// const minus = document.querySelector('.button__minus--js');
const countString = {
 count= JSON.stringify(count)
}
const glasses = count.innerHTML;
console.log(glasses);

