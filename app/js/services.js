'use strict';

/* Services */

var customerAppServices = angular.module('customerAppServices', ['ngResource']);

customerAppServices.factory("Customers", ['$resource', 
	function($resource) {
		return $resource('customer_data/:customers.json', {}, {
			query: {method:'GET', params:{customers:'customers'}, isArray:true}
		});
	}]);

customerAppServices.factory("Customer", 
	function() {
		var customerServices = {};
		
		customerServices.addCustomer = function(customer) {
			var cusList = JSON.parse(window.localStorage.getItem("customerList"));
			cusList.push(customer);
			window.localStorage.setItem("customerList", JSON.stringify(cusList));
		}

		customerServices.removeCustomer = function(customer) {
			console.log("This is from remove customer: " + customer);
			var cusList = JSON.parse(window.localStorage.getItem("customerList"));
			var objIndex = cusList.indexOf(customer);
			if (objIndex != -1) {
				cusList.splice(objIndex, 1);
			};
			window.localStorage.setItem("customerList", JSON.stringify(cusList));
		}

		return customerServices;
	})

