var app = angular.module("RTC", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "login.html",
      controller: "LoginCtrl"
    }).when('/profile', {
  		templateUrl: "profile.html",      
  		//controller: "MainCtrl"
    }).when('/profile2', {
  		templateUrl: "profile2.html",      
  		//controller: "MainCtrl"
    });
});

function LoginCtrl($scope, $routeParams, $location, $rootScope, Comm) {
  g1 = $scope; // Expose $scope for debugging.  

  $scope.signin = function() {
    user_params = { username: $scope.username };
    Comm.signin(user_params, function(err, user) {
      $rootScope.current_user = user_params;
    });
  };
}
