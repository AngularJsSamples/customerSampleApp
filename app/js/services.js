'use strict';

/* Services */

var customerAppServices = angular.module('customerAppServices', ['ngResource']);

customerAppServices.factory("Customers", ['$resource', 
	function($resource) {
		return $resource('customer_data/:customers.json', {}, {
			query: {method:'GET', params:{customers:'customers'}, isArray:true}
		});
	}]);

