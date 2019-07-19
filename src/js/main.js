"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const key = new Date().toISOString().slice(0, 10);
const counter = document.querySelector('.water__counter--js');

var count = counter.innerHTML;
counter.addEventListener('change', (e) => {

})
var checker = localStorage.getItem(key,count);
console.log(checker);


if (checker>0){
  counter.innerHTML = checker;
  count = checker;
}

////////////////BUTTONS///////////////////////////////////
{
  const plus = document.querySelector('.button__plus--js');
plus.addEventListener('click', (e) => {                   
  e.preventDefault();  
                                    
  localStorage.setItem(key, ++count);
  counter.innerHTML = count;

})
const minus = document.querySelector('.button__minus--js');
minus.addEventListener('click', (e) => {
  e.preventDefault();
  if (count > 0) {
    localStorage.setItem(key, --count);
    counter.innerHTML = count;
  }
})
}


