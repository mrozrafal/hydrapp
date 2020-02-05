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

const key = new Date().toISOString().slice(0, 10); // date function;

const counter = document.querySelector('.water__counter--js');

var count = counter.innerHTML;
counter.addEventListener('change', (e) => {

})
var checker = localStorage.getItem(key,count);
// console.log(checker);


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





/////////////////HISTORY///////////////////////////////
var historyKey;
const tab = [] ;
var i=0;
tab[0]=[key,count];
var d = new Date();


while(((localStorage.length)-1)>i){
  d.setDate(d.getDate()-i);
historyKey=((d.toISOString().slice(0,10)));
var jss =(localStorage.getItem(historyKey,count.value));
console.log(historyKey+ " wypito: " + jss );


  tab [i] = localStorage.getItem(d,count);
  i++;
}


//////////////////history button///////////////////
const table = document.querySelector('.table--js');
const history = document.querySelector('.button__history--js');
history.addEventListener('click', (e)=>{
  e.preventDefault();
  table.classList.toggle('table__visable');

} )











