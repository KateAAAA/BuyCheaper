$(function() {
	
	var storage = chrome.storage.local;
	storage.get('AllElls', function (data) {
			var temp = data['AllElls'];
			for (i = 0; i < temp.length; i++) {
			  $('.content').append(temp[i][1]);
			  $('.content').append(" - ");
			  $('.content').append(temp[i][3]);
			  $('.content').append('<br>');
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
		storage.set({'AllElls': []});
		
	}
	
	var clearButton = document.createElement('button');
	clearButton.innerHTML='Clear list';
	clearButton.className='clear';
	addEvent(clearButton,'click',clearContent);  //см addlisten jquery
	document.body.appendChild(clearButton);	
});