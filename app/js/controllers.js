'use strict';

/* Controllers */

var customerAppControllers = angular.module("customerAppControllers", []);

customerAppControllers.controller("CustomerListCtrl", ['$scope', 'Customers', 
	function($scope, Customers) {
		$scope.customerList = Customers.query();
		$scope.currentOrderBy = "Asc";

		$scope.selectedCustomer = function(customer) {
			$scope.selectedCust = customer;
		}

		$scope.orderList = function() {
			var elem = document.getElementById("orderByButton");
			if ($scope.currentOrderBy == "Asc") {
				$scope.currentOrderBy = "Desc";
				$scope.orderBy = "+name";
				elem.value = "Desc";
			}
			else {
				$scope.currentOrderBy = "Asc";
				$scope.orderBy = "-name";
				elem.value = "Asc";
			}
		}

		$scope.orderList();
	}]);
