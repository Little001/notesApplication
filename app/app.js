(function(){
'use strict';
angular.module('appServices', []);
angular.module('appControllers', []);

angular.module('myApp', ['appServices', 'appControllers', 'ui.router', 'restangular', 'ui-notification', 'jm.i18next'])
.config(function(RestangularProvider, NotificationProvider){
	RestangularProvider.setBaseUrl('http://jsonplaceholder.typicode.com');
        
	 NotificationProvider.setOptions({
            delay: 3000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'top'
        });

});

})();

