(function () {
	"use strict";
	angular.module('swApp')
	.controller('detailsController',
	['$scope','$location', 'swHttpService', 'personDetailService', function ($scope,$location, swHttpService, personDetailService) {
		
		$scope.rotas = function(){
			$location.path('/');
		};
		
		var characterUrl = personDetailService.getUrl('url');
		
		
		$scope.getCharacterDetails = function(){
			swHttpService.getCharacter(characterUrl).then(function(response){
				var nameAbilities = response.data.abilities;
				var abilities = [];
				$scope.abilityName = [];
				angular.forEach( nameAbilities, function(value, key) {
					$scope.abilityName.push({
						name: value.ability.name
					});
				}, abilities);
				$scope.personDetails = response.data;
			});
		}
		
		$scope.sortBy = function (field) {
			$scope.orderWith = field;
			$scope.orderDirection = !$scope.orderDirection;
		};
		
		$scope.getCharacterDetails();
		
	}]);
})();