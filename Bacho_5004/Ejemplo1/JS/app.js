//let saludo = 'Hola desde un archivo independiente!';
//console.log(saludo);
/*
let title = document.getElementById('jelou');
title.innerHTML = 'Hola Alumnos';
console.log(title);

let despedida = document.getElementsByClassName('despedida');
despedida.innerHTML = 'Adios chavos';
console.log(despedida);
*/

let title = document.getElementById('title');
title.innerHTML = 'Lenguajes de programación';

let description = document.getElementById('description');
description.innerHTML = 'Este es tun listado de algunos lenguajes de programción'; 

//let items = document.getElementsByClassName('list-group-item');
//console.log(items);

//let items = document.querySelectorAll('li:nth-child(odd)');
let items = document.querySelectorAll('li:nth-child(even)');


//let items = document.getElementsByTagName('li');
for (i=0; i<items.length; i++){
   items[i].style.background = '#00ff00';
   console.log(items[i]);
}

//let elementoCss = document.querySelector('#first-course');
//console.log(elementoCss);

//let elementoCss = document.querySelector('.list-group-item');
//console.log(elementoCss);

//let elementoCss = document.querySelector('div.row > ul.list-group > li');
//console.log(elementoCss);



