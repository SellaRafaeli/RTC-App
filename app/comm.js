app.service("Comm", function($http) {
  //http = $http;
  function doGet(route, cb) { 
      $http.get(route).then(cb).catch(console.log);
  }

  var res = {
    message: "New data from a service",    

    signin: function(params, cb) {
      doGet('/mocks/signin.json',cb);      
    },

    getUserData: function(params, cb) {
      doGet('/mocks/userdata.json',cb);      
    }          
  }
  

  return res;
});
