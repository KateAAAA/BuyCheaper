var element = angular.module('phonecatApp', []);
element.controller('PhoneListCtrl', function ($scope){
	$scope.phones=[];
	$scope.phonescount=$scope.phones.length;
	var storage = chrome.storage.local;


	var contains = function(arr, element) {
		for(var i=0; i<arr.length; i++)
		{
			if(arr[i]===element) {
				return true;
			}
		}
		return false;
	}


$scope.remove = function(url) {
	storage.get('AllElls', function (data) {
		var newData=[];
		for (var i = 0; i < data['AllElls'].length; i++) {
			if(!(data['AllElls'][i][0]==url)) {
				newData.push(data['AllElls'][i]);
				console.log(newData);
			}
		}
		storage.set({'AllElls': newData}, function() {
					console.log(newData);
					init();
				});	
	});

}

	$scope.setFilter = function(type) {
		$scope.active=type;
	}

	var init = function() {
			storage.get('AllElls', function (data) {	
			$scope.$apply(function(){
				$scope.phones = data['AllElls']; 
				$scope.types=[];
				var newPhones=[];//!!
				var AllTypes=[];
				//тут тип динамически определяется
				for (var i = 0; i < $scope.phones.length; i++) {
					var newPhone={};
					newPhone.url=$scope.phones[i][0]; 
					newPhone.name=$scope.phones[i][1];
					newPhone.store=$scope.phones[i][2];
					newPhone.price=parseInt($scope.phones[i][3].replace(/\D+/g,""));// только число
					newPhone.type=$scope.phones[i][4];
					newPhone.other=$scope.phones[i][5];
					newPhone.photo=$scope.phones[i][6];

					if(!contains(AllTypes, newPhone.type)) {
						AllTypes.push(newPhone.type);
					}
					newPhones[i]=newPhone;
				};
				$scope.types=AllTypes;
				$scope.phones=newPhones;
				$scope.phonescount=$scope.phones.length;
			});
		});
	}

	init();

});



