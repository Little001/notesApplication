/**
* MainController 
*
* @class MainController
* @constructor
*/

angular.module('appControllers')
  .controller('MainController', ['$scope', '$i18next', function($scope, $i18next){
          
     $scope.ENlng = function(){
        $i18next.options.lng = 'EN';
        $i18next.options.resGetPath = '../locales/EN/translation.json';
      };
       $scope.CZlng = function(){
        $i18next.options.lng = 'CZ';
        $i18next.options.resGetPath = '../locales/CZ/translation.json';
      };
      
  
      
  }
]);
