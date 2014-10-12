var app = angular.module("RTC", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "login.html",
      controller: "loginCtrl"
    }
  	).when('/profile', {
  		templateUrl: "profile.html",      
  		//controller: "MainCtrl"
    }).when('/profile2', {
  		templateUrl: "profile2.html",      
  		//controller: "MainCtrl"
    });
});



app.controller("loginCtrl", function($scope, $routeParams, $location, $rootScope){  
  g1 = $scope; // Expose $scope for debugging.  

  $scope.submit = function() {
    if (true || ($scope.username == "Sella")) {    	
      $rootScope.current_user = {username: $scope.username};      
      $location.path('/profile')
    }
  };
});
