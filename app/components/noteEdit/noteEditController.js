/**
* Project Controller
*
* @class ProjectController
* @constructor
*/

angular.module('appControllers')
  .controller('noteEditController', ['$scope','note','DataProvider', function($scope, note, DataProvider){
      
      $scope.note =  angular.copy(note);
      
      $scope.editNote = function(){
         DataProvider.editNote($scope.note);
      };
  }
]);
