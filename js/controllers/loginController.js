angular.module('CrushHourApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$auth', '$window', '$http', '$state', 'facebookFactory'];

function LoginController($auth, $window, $http, $state, facebookFactory) {
  var self = this;
  self.user = {
    first_name : '',
    last_name : '',
    facebookId : '',
    email : '',
    gender : ''
  };
  // self.setUserInfo = setUserInfo;
  self.storeUser = storeUser

  // set the info returned by fb to your current user
  self.setUserInfo = function() {
    console.log('setuserinfo')
    facebookFactory.getUserInfo()
      .then(function(res) {
        self.user.facebookId = res.id;
        self.user.first_name = res.first_name;
        self.user.last_name  = res.last_name;
        self.user.email      = res.email;
        self.user.gender     = res.gender;
        // self.user.interested_in = res.interested_in;
        self.storeUser(self.user)
          .then($window.sessionStorage.currentUser = self.user)
          .then(function(res){console.log(res)})

      })
  }

  function storeUser(user) {
    console.log('storeUser')
    return $http
      .post('http://localhost:3000/api/users', user)

  }

  self.authenticate = function(provider) {
    console.log('authenticate')
    $auth.authenticate(provider)
      .then(self.setUserInfo())
      .then(
        console.log('send this user',self.user)
      );
    $state.go('now');
  };
  //
  // self.isAuthenticated = function() {
  //   console.log('isAuthenticated')
  //   self.setUserInfo();
  //   return $auth.isAuthenticated()
  //   // $state.go('now');
  // };

  self.logout = function() {
    $auth.logout();
    delete $window.localStorage.currentUser;
  };

  // self.pullFacebook = function() {
  //   return $http.get('http://crushhour.herokuapp.com')
  // }

  $window.fbAsyncInit = function() {
    FB.init({
      appId: '788101691328322',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.4'
    });
  };
}
