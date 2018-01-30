var x = document.body.children;

// var y = document.getElementById('naslov');
var y = document.querySelector('h1');

var p = document.createElement('p');
p.innerText = 'Meho!';
p.style.color = 'yellow';

y.appendChild(p);

console.dir(y);


var obj = {
  name : 'meho',
  height : '738237'
}

buildTable(obj);

function buildTable(obj) {
  
}