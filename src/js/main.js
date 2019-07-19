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
const counter = document.querySelector('.water__counter--js');

const count = counter.innerHTML;
if (localStorage.getItem(key,count)){
  console.log(count);
  counter.innerHTML = localStorage.getItem(key,count);
localStorage.setItem(key, count);
}else{
  
  localStorage.setItem(key, 0);
  counter.innerHTML = 0;
  
}
console.log(count);


