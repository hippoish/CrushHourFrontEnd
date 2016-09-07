angular.module('CrushHourApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$auth'];

function LoginController($auth) {
  var self = this;

  self.authenticate = function(provider) {
    $auth.authenticate(provider);
  };
}
