(function() {

  angular.module('CrushHourApp', ['satellizer', 'ui.router', 'ngMap'])
    // .controller('MainController', MainController)
    .config(AuthProvider);

  // MainController.$inject = ['$auth', '$window', '$http'];
  AuthProvider.$inject = ['$authProvider'];

  // function MainController($auth, $window, $http) {
  //   var self = this;
  //
  //   self.authenticate = function(provider) {
  //     $auth.authenticate(provider);
  //   };
  //   self.isAuthenticated = function() {
  //     return $auth.isAuthenticated();
  //   };
  //   self.logout = function() {
  //     $auth.logout();
  //     delete $window.localStorage.currentUser;
  //   };
  //
  //   self.pullFacebook = function() {
  //     return $http.get('http://crushhour.herokuapp.com/api/users')
  //   }
  // }

  function AuthProvider($authProvider) {
    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = false;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = '/';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.tokenHeader = 'Authorization';
    $authProvider.tokenType = 'Bearer';
    $authProvider.storageType = 'localStorage';

    $authProvider.facebook({
      clientId: '1793210427603289',
      name: 'facebook',
      url: 'https://crushhour.herokuapp.com/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 580, height: 400 }
    });
    //
    // $authProvider.google({
    //   clientId: 'crush-hour-1473133696259'
    // });

  }
})();
