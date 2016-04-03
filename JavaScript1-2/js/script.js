"use strict";

/*FUNCTION POW*/

function stepen() {

function pow(a, n) {
  var result = a;

  for (var i = 1; i < n; i++) {
    result *= a;
  }

  return result;
}

var a = prompt('Введите число', '');
var n = prompt('Введите степень', '');

if (n<=0){
  alert( 'Степень должна быть > 0');
}else{
  alert( pow(a, n) );
  console.log( 'pow(a, n) = ', ( pow(a, n) ));
}

}

/*FUNCTION IMENA*/

function imena() {

var arrNames = [];

 for (var i = 0; i < 5; i++) {
 	arrNames.push ( prompt('Введите имена:') );
}

var userName = prompt('Введите Ваше имя', '');
	
for (var i = 0; i < arrNames.length; i++) {
	if (userName == arrNames[i]){
		var login = arrNames[i];
  }
}

  if (login) { 
  alert(login + ',' + ' ' + 'вы есть в списке.');
} else {
   alert('Извините! Вас нет в списке.');
}

}