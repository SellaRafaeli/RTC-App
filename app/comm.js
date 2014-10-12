app.service("Comm", function($http) {
  //http = $http;

  var res = {
    message: "New data from a service",

    signin: function(params, cb) {
      if (params.username == "sella") {
        return cb();
      }
      
      //$http.post('/questions/'+qId+'/initA2A', {authToken: AuthService.currentUser.authToken, qId: qId, targetEmail: targetEmail}).then(cb).catch(genericErrHandler);
    }
  };

  return res;
});
