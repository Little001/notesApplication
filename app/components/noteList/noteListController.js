/**
* noteListController
*
* @class noteListController
* @constructor
*/

angular.module('appControllers')
  .controller('noteListController', ['$scope','notes', 'Notification', function($scope, notes, Notification){
      
      $scope.notes = notes;
      
       $scope.error = function() {
                    Notification.error('Error notification');
                };
      //get all notes from test RESTapi
      $scope.getNotes = function(){
        allNotes.getList()
          .then(function(response){
            console.log("All notes got OK");
            $scope.allNotes = response;
        })
        .catch(function(response){
            console.log("There was an error getting");
            console.log(response);
        });
      };
      
      //get specific note from test RESTapi
      $scope.getNoteById = function(id){
         Restangular.one("posts", id).get()
          .then(function(response){
              console.log("Note got OK");
              $scope.note = response;
          })
          .catch(function(response){
              console.log("There was an error getting");
              console.log(response);
          }); 
      };
      
      //post new data to test RESTapi
      $scope.postData = function(){
         var newAccount = {
            userId: $scope._userId,
            id: $scope._id,
            title: $scope._title,
            body: $scope._body          
          };
          allNotes.post(newAccount)
            .then(function(response){
                console.log("Object saved OK");
                console.log(response);
              })
            .catch(function(response){
                console.log("There was an error saving");
                console.log(response);
            });
      };
      
      
      //put data to test RESTapi
      $scope.putData = function(){
        Restangular.one("posts", 15).get()
          .then(function(response){
              var editFirstAccount = Restangular.copy(response);
              editFirstAccount.title = "new tittleeee";
              editFirstAccount.save()
              .then(function(response){
                console.log(response);
              })
              .catch(function(response){
                console.log(response);
              })
          })
          .catch(function(response){
              console.log("There was an error getting");
              console.log(response);
          }); 
      };
      
      //delete data to test RESTapi
      $scope.deleteData = function(){
        Restangular.one("posts", 15).get()
          .then(function(response){
              var editFirstAccount = Restangular.copy(response);
              editFirstAccount.remove()
              .then(function(response){
                console.log("OK!");
              })
              .catch(function(response){
                console.log("fail");
              });
          })
          .catch(function(response){
              console.log("There was an error getting");
              console.log(response);
          }); 
      };
      
      
      
      
  }
]);
