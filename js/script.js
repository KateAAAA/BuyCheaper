(function (){	// обернем все в безымянную функцию, чтобы не создавать глобальных переменных - просто хороший тон
	"use strict";
	alert("222");
	var temp = document.createElement('button');
		temp.id = 'addButtonSupDi';	// добавим css класс 'downloadLink' для нашей ссылки
		temp.type = 'button';
		temp.innerHTML = '+';
		document.body.appendChild(temp); //добавляем элемент в тело документа

	//var message="добавляем товар";
	document.getElementById('addButtonSupDi').onclick = function() {
    	//alert(message);
    	//temp.innerHTML = "Added";
	}
	


})();