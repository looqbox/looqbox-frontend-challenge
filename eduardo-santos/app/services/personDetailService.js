(function(){
    'use strict';
    angular.module('swApp')
        .service('personDetailService', [function (){

              var characterUrl = '';

              var addUrl = function(newUrl) {
                  characterUrl = sessionStorage.setItem('url', newUrl) ;
              };

              var getUrl = function(url){
                  return sessionStorage.getItem(url);
              };

              return {
                addUrl: addUrl,
                getUrl: getUrl
              };

        }]);
}());