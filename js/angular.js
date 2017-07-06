var app = angular.module('myApp', []);
	app.controller('personCtrl', function($scope) {
	    $scope.firstName = "花花";
	    $scope.lastName = "花影";
	    $scope.myVar = false;
	    $scope.toggle = function() {
	        $scope.myVar = !$scope.myVar;
	    }
	     $scope.myObj = {
		    "color" : "white",
		    "background" : "skyblue",
		    "font-size" : "10px",
		    "padding" : "20px"
		  }
});
	