var app = angular.module("RTC", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "login.html",
      controller: "LoginCtrl"
    }).when('/profile', {
  		templateUrl: "profile.html",      
  		controller: "ProfileCtrl"
    }).when('/profile2', {
  		templateUrl: "profile2.html",      
  		//controller: "MainCtrl"
    });
});

function LoginCtrl($scope, $routeParams, $location, $rootScope, Comm) {
  g1 = $scope; // Expose $scope for debugging.  

  $scope.signin = function() {
    user_params = { username: $scope.username };
    Comm.signin(user_params, function(res) {
      $rootScope.current_user = res.data.user;
      $location.path('/profile');
    });
  };
}

function ProfileCtrl($scope, Comm) {
	$scope.userdata = {a:1}

	Comm.getUserData({},function(res){ 
		$scope.userdata = res.data;
	})
}