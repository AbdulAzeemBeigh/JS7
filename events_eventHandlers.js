'use strict';
const h1 = document.querySelector('h1');

const myalert = function (e) {
  alert('You are reading the heading ');
};

h1.addEventListener('mouseenter', myalert);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);

// h1.onmouseenter = function (e) {
//   alert('Great! You are reading the heading ');
// };