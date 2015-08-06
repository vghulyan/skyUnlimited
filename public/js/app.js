'use strict';

var app = angular.module('skyApp', ['ngRoute']);

app
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {templateUrl: 'template/home.html', controller: 'skyCtrl'});
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);

	