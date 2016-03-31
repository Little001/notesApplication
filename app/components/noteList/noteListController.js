/**
* noteListController
*
* @class noteListController
* @constructor
*/

angular.module('appControllers')
  .controller('noteListController', ['$scope','notes', 'Notification', function($scope, notes, Notification){
      
      $scope.notes = notes;

   }
]);
