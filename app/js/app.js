'use strict';

/* App Module */

var customersApp = angular.module('customersApp', [
	'ngRoute',
	'customerAppControllers',
	'customerAppServices'
	]);

customersApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
	      when('/customers', {
	        templateUrl: 'partials/customer-list.html',
	        controller: 'CustomerListCtrl'
	      }).
	      otherwise({
	      	redirectTo: '/customers'
	      });
}]);
