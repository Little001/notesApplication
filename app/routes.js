angular.module('myApp').config(function($stateProvider, $urlRouterProvider, $locationProvider, $i18nextProvider) {
    
  // translations 
	$i18nextProvider.options = {
		lng: 'EN',
		useCookie: false,
		useLocalStorage: false,
		fallbackLng: 'dev',
		resGetPath: '../locales/EN/translation.json',
		defaultLoadingValue: ''
	};  
 
    
    
  $urlRouterProvider.otherwise("list");
  
  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "app/components/noteList/noteListView.html",
      controller: "noteListController",
      resolve: {
				notes: function(DataProvider){
					return DataProvider.getAllNotes();
				}
			}
    })
    
    .state('new', {
      url: "/new",
      templateUrl: "app/components/noteNew/noteNewView.html",
      controller: "noteNewController"
    })
    
    .state('detail', {
      url: "/detail/:id",
      templateUrl: "app/components/noteDetail/noteDetailView.html",
      controller: "noteDetailController",
      resolve: {
        note: function(DataProvider, $stateParams){
          return DataProvider.getNote($stateParams.id);
        }
      }
    })
    
    .state('edit', {
      url: "/edit/:id",
      templateUrl: "app/components/noteEdit/noteEditView.html",
      controller: "noteEditController",
      resolve: {
        note: function(DataProvider, $stateParams){
          return DataProvider.getNote($stateParams.id);
        }
      }
    });

    
    
    $locationProvider.html5Mode(true);
});