(function(){
    'use strict';
    angular.module('swApp')
        .factory('swHttpService', ['$http', function ($http){

            var _getAllPeople = function(peopleUrl){
                return $http({
                    method: 'GET',
                    url: peopleUrl ? peopleUrl : 'https://pokeapi.co/api/v2/pokemon/'
                });
            };

            var _searchPeople = function(searchParameter){
                return $http({
                    method: 'GET',
                    url: 'https://pokeapi.co/api/v2/pokemon/?search=' + searchParameter
               });
            }

            var _getCharacter = function(characterUrl){
                return $http({
                    method: 'GET',
                    url: characterUrl
                });
            }

            var _getHeight = function(heightUrl){
                return $http({
                    method:'GET',
                    url: heightUrl
                });
            }

            return {
                getAllPeople: _getAllPeople,
                searchPeople: _searchPeople,
                getCharacter: _getCharacter,
                getHeight: _getHeight
            };
            
        }]);
}());