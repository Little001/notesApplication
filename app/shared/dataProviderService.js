/**
* Data Provider Service is in charge of working with packets 
*
* @module Service
* @class AccessService
* @constructor
*/
angular.module('appServices')
	.factory('DataProvider', ['Restangular', 'Notification', '$state', function(Restangular, Notification, $state){
		'use strict';
		var Provider = {};
		
		Provider.getAllNotes = function(){
			return Restangular.all('posts').getList()
			.then(function(notes){
				console.log('GET query succeeded');
				return notes;
			}).catch(function(){
				console.log('Error in GET query');
				Notification.error('Error in GET query');
			});
		};
		
		Provider.getNote = function(id){
			return Restangular.one("posts", id).get()
			.then(function(note){
				console.log('GET query succeeded');
				return note;
			}).catch(function(){
				console.log('Error in GET query');
				Notification.error('Error in GET query');
			});
		};
		
		Provider.addNote = function(_title, _body){
			return Restangular.all('posts').post({
							title: _title,
							body: _body
						}).then(function(note){
							console.log('POST query succeeded');
							return note;
						}).catch(function(){
							console.log('Error in POST query');
							Notification.error('Error in POST query');
						});
		};
		
		Provider.deleteNote = function(note){
				var editFirstAccount = Restangular.copy(note);
				editFirstAccount.remove().then(function(){
					console.log("Delete succeeded");
					$state.go('list').then(function(){
						Notification.success('Delete succeeded');
					});
				}).catch(function(){
					console.log("Delete fail");
					Notification.error('Error in DELETE query');
				});
		};
		
		Provider.editNote = function(note){
				var editFirstAccount = Restangular.copy(note);
				editFirstAccount.save().then(function(){
					console.log("Note was saved");
					$state.go('list').then(function(){
						Notification.success('Note was saved');
					});
				}).catch(function(){
					console.log("Saved fail");
					Notification.error('Error in PUT query');
				});
		};
		
		
		
		
		return Provider;
	}]);