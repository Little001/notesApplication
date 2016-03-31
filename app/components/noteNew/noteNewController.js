/**
* noteNewController 
*
* @class noteNewController
* @constructor
*/

angular.module('appControllers')
  .controller('noteNewController', ['$scope','DataProvider', 'Notification', '$filter', function($scope, DataProvider, Notification, $filter){
     
     $scope.newNote = {
       id: '',
       title: '',
       body: ''
     };
     
     $scope.addNote = function(){
       if($scope.title && $scope.body){
           DataProvider.addNote($scope.title, $scope.body).then(function(note){
             $scope.newNote.id = note.id;
           $scope.newNote.title = note.title;
           $scope.newNote.body = note.body;
         });
       }
       else{
         Notification.error($filter('i18next')('errors.required'));
       }
     };
            
  }
]);
