/**
* Data Provider Service is in charge of working with packets 
*
* @module Service
* @class AccessService
* @constructor
*/
angular.module('appServices')
	.factory('DataProvider', ['Restangular', 'Notification', '$state', '$filter', function(Restangular, Notification, $state, $filter){
		'use strict';
		var Provider = {};
		
		Provider.getAllNotes = function(){
			return Restangular.all('posts').getList()
			.then(function(notes){
				console.log('GET query succeeded');
				return notes;
			}).catch(function(){
				console.log('Error in GET query');
				Notification.error($filter('i18next')('errors.get_error'));
			});
		};
		
		Provider.getNote = function(id){
			return Restangular.one("posts", id).get()
			.then(function(note){
				console.log('GET query succeeded');
				return note;
			}).catch(function(){
				console.log('Error in GET query');
				Notification.error($filter('i18next')('errors.get_error'));
			});
		};
		
		Provider.addNote = function(_title, _body){
			return Restangular.all('posts').post({
							title: _title,
							body: _body
						}).then(function(note){
							console.log('POST query succeeded');
							
							Notification.success($filter('i18next')('success.add_note'));
							return note;
						}).catch(function(){
							console.log('Error in POST query');
							Notification.error($filter('i18next')('errors.post_error'));
						});
		};
		
		Provider.deleteNote = function(note){
				var editFirstAccount = Restangular.copy(note);
				editFirstAccount.remove().then(function(){
					console.log("Delete succeeded");
					$state.go('list').then(function(){
						Notification.success($filter('i18next')('success.delete'));
					});
				}).catch(function(){
					console.log("Delete fail");
					Notification.error($filter('i18next')('errors.delete_error'));
				});
		};
		
		Provider.editNote = function(note){
				var editFirstAccount = Restangular.copy(note);
				editFirstAccount.save().then(function(){
					console.log("Note was saved");
					$state.go('list').then(function(){
						Notification.success($filter('i18next')('success.save_succeded'));
					});
				}).catch(function(){
					console.log("Saved fail");
					Notification.error($filter('i18next')('errors.put_error'));
				});
		};
		
		return Provider;
	}]);