'use strict';

/* Controllers */

var customerAppControllers = angular.module("customerAppControllers", []);

customerAppControllers.controller("CustomerListCtrl", ['$scope', 'Customers', '$modal', 'Customer',
	function($scope, Customers, $modal, Customer) {
		var customerList = JSON.parse(window.localStorage.getItem("customerList"));
		if (customerList) {
			$scope.customerList = customerList;
		}
		else {
			Customers.query(function(data) {
				$scope.customerList = data;
				window.localStorage.setItem("customerList", JSON.stringify($scope.customerList));
			});
		}
		
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

		$scope.addNewCustomerTapped = function(size) {
			var modalInstance = $modal.open({
				templateUrl: 'partials/addCustomer-modal.html',
				controller: 'addCustomerModalCtrl',
				size: size,
				backdrop: 'static'
			});

			modalInstance.result.then(function(newCustomer) {
				var newCustomer = newCustomer;
				Customer.addCustomer(newCustomer);
				$scope.customerList.push(newCustomer);
			});
		}

		$scope.removeCustomer = function(customer) {
			var objIndex = $scope.customerList.indexOf(customer);
			if (objIndex != -1) {
				$scope.customerList.splice(objIndex, 1);
			};
			window.localStorage.setItem("customerList", JSON.stringify($scope.customerList));
			if ($scope.selectedCust == customer) {
				$scope.selectedCust = null;
			};
		}

	}]);


customerAppControllers.controller("addCustomerModalCtrl", ['$scope', '$modalInstance', 
	function($scope, $modalInstance) {

		$scope.close = function() {
			$modalInstance.dismiss('cancel');
		}

		$scope.addCustomer = function(customer) {
			$modalInstance.close(customer);
		}
	}]);



