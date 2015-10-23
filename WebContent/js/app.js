//messi
var mainApp = angular.module("messi", [ 'ngRoute' ]);
mainApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.

	when('/dashboard', {
		templateUrl : 'dashboard/dashboard.html'
	// controller: 'AddStudentController'
	}).

	otherwise({
		redirectTo : '/dashboard'
	});
} ]);

//mainApp.controller('AddStudentController', function($scope) {
//	$scope.message = "This page will be used to display add student form";
//});
//
//mainApp.controller('ViewStudentsController', function($scope) {
//	$scope.message = "This page will be used to display all the students";
//});