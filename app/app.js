var app = angular.module("RTC", []);

current_user = null;

app.controller("MainCtrl", function($scope){
  // Expose $scope for debugging.
  g1 = $scope;

  $scope.password = "123";
  $scope.current_user = null;

  $scope.submit = function() {
    if ($scope.username == "Sella") {
      $scope.current_user = {name: "Sella"};
    }
  };
});
