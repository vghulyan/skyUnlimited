'use strict';

app.factory('skyService', function($http, $location) {
	var path = 'data/';
	return {
		readData: function() {
			/**
				The server 'still-scrubland-9880.herokuapp.com' has to implement CORS to grant JavaScript from your website access. 
				My JavaScript can't grant itself permission to access another website.
				Hence, reading the json locally
			*/
			var $promise = $http.get('data/bill.json');

			return $promise;
		}
	}
});

app.config(['$httpProvider', function($httpProvider) {
	console.log('Our Configuration goes here...');
}]);
