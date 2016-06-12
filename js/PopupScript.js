$(function() {
	
	var storage = chrome.storage.local;
	storage.get('AllElls', function (data) {
			var temp = data['AllElls'];
			for (i = 0; i < temp.length; i++) {

			  $('.content').append("<div class='section '>"+"<img src='"+temp[i][6]+"' width='auto' height='100' alt = ''> <br> "+"<div class='name'>"+temp[i][1]+"</div>"
			  	+"<br><div class='price'>"+temp[i][3]+"</div><br><br>");				
			}
		});

	var addEvent = function(element, evnt, funct){
		if (element.attachEvent) {
			return element.attachEvent('on'+evnt, funct);
		}
		else {
			return element.addEventListener(evnt, funct, false);
		}
	}

	var clearContent = function () {
		$('.content').empty();
		//storage.set({'AllElls': []});
		storage.clear();
		
	}
	
	var clearButton = document.createElement('button');
	clearButton.innerHTML='Очистить все';
	clearButton.className='buyButton';
	addEvent(clearButton,'click',clearContent);  //СЃРј addlisten jquery
	document.body.appendChild(clearButton);	
});