$(function() {
	
	var storage = chrome.storage.local;
	storage.get('AllElls', function (data) {
			var temp = data['AllElls'];
			if(temp==undefined) 
			{
				$('.headOnPopUp').append('<div class = "TitleOnPopUp"><h3>Buy Cheaper -расширение для сравнения характеристик товаров из интернет-магазинов. <br>Работает с магазинами:</h3></div>');
				$('.content').append('<div class ="firstText">  <br><a href="http://www.citilink.ru/" target="_blank">http://www.citilink.ru/</a><br><a href="http://www.dns-shop.ru/" target="_blank">http://www.dns-shop.ru/</a><br><a href = "http://technopoint.ru/" target="_blank">http://technopoint.ru/</a><br>Зайдите на страницы товаров и добавьте продукты к сравнению</div>');
			}
			else
			{
				$('.headOnPopUp').append('<div class = "TitleOnPopUp"><h3>Вы добавили к сравнению следующие товары: </h3></div>');
				for (i = 0; i < temp.length; i++) {

				$('.content').append("<div class='section '>"+"<img src='"+temp[i][6]+"' height='100' alt = ''> <br> "+"<div class='name'>"+temp[i][1]+"</div>"
			  	+"<br><div class='price'>"+temp[i][3]+"</div><br><br>");				
				}
				$(".content").slick({
					dots: true,
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1
				  });
				var clearButton = document.createElement('button');
				clearButton.innerHTML='Очистить все';
				clearButton.className='buyButton';
				addEvent(clearButton,'click',clearContent);  //СЃРј addlisten jquery
				document.body.appendChild(clearButton);	

				$('.content').append('<div class="buyButton1"><a href="../info.html" class="buyButton1" target="_blank" >Подробнее</a></div>');
			}			
		});

	var addEvent = function(element, evnt, funct){
		if (element.attachEvent) {return element.attachEvent('on'+evnt, funct);}
		else {return element.addEventListener(evnt, funct, false);}
	}

	var clearContent = function () {
		$('.content').empty();
		storage.clear();
		location.reload();		
	}
});