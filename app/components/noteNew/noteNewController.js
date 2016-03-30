/**
* Project Controller
*
* @class ProjectController
* @constructor
*/

angular.module('appControllers')
  .controller('noteNewController', ['$scope','DataProvider', function($scope, DataProvider){
     
     $scope.newNote = {
       id: '',
       title: '',
       body: ''
     };
     
     $scope.addNote = function(){
       DataProvider.addNote($scope.title, $scope.body).then(function(note){
         $scope.newNote.id = note.id;
         $scope.newNote.title = note.title;
         $scope.newNote.body = note.body;
       });
     };
            
  }
]);
