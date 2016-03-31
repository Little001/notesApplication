/**
* Project Controller
*
* @class ProjectController
* @constructor
*/

angular.module('appControllers')
  .controller('noteDetailController', ['$scope','note','DataProvider', function($scope, note, DataProvider){
      
      $scope.note = {
        id: note.id,
        userId: note.userId,
        title: note.title,
        body: note.body,
      };
      
      $scope.deleteNote = function(){
         DataProvider.deleteNote(note);
      };
  }
]);
