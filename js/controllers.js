var element = angular.module('phonecatApp', []);
element.controller('PhoneListCtrl', function ($scope){
	$scope.phones=[];
	$scope.phonescount=$scope.phones.length;
	var storage = chrome.storage.local;

	storage.get('AllElls', function (data) {	
		$scope.$apply(function(){
			$scope.phones = data['AllElls']; 
			var newPhones=[];//!!
			//тут тип динамически определяется
			for (var i = 0; i < $scope.phones.length; i++) {
				var newPhone={};

				newPhone.name=$scope.phones[i][1];
				newPhone.store=$scope.phones[i][2];
				newPhone.price=parseInt($scope.phones[i][3].replace(/\D+/g,""));// только число
				newPhone.type=$scope.phones[i][4];
				newPhones[i]=newPhone;
			};
			$scope.phones=newPhones;
			$scope.phonescount=$scope.phones.length;
		});
	});

});



