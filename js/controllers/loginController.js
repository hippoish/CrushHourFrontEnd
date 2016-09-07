angular.module('CrushHourApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$auth', '$window', '$http'];

function LoginController($auth, $window, $http) {
  var self = this;

  self.authenticate = function(provider) {
    $auth.authenticate(provider);
  };
  self.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };
  self.logout = function() {
    $auth.logout();
    delete $window.localStorage.currentUser;
  };

  self.pullFacebook = function() {
    return $http.get('http://crushhour.herokuapp.com')
  }
}
