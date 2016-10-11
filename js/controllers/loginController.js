angular.module('CrushHourApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$auth', '$window', '$http', '$state', 'facebookFactory'];

function LoginController($auth, $window, $http, $state, facebookFactory) {
  var self = this;
  self.user = {};
  self.setUserInfo = setUserInfo;
  self.storeUser = storeUser;

  // set the info returned by fb to user
  function setUserInfo() {
    console.log('setuserinfo')
    facebookFactory.getUserInfo()
      .then(function(res) {
        self.user.facebookId = res.id;
        self.user.first_name = res.first_name;
        self.user.last_name  = res.last_name;
        self.user.email      = res.email;
        self.user.gender     = res.gender;
        // self.user.interested_in = res.interested_in;
        // now use the data in user to store a currentUser to sessionStorage so it can be accessed globally using $window
        console.log('self.user from setUserInfo is:', self.user)
        self.storeUser(self.user)
          .then(function(res) {
            $window.sessionStorage.currentUser = JSON.stringify(self.user)
          })
      })
  }

  function storeUser(user) {
    console.log('storeUser', user)
    return $http
      // .post('https://crushhour.herokuapp.com/api/users', user)
      .post('https://localhost:3000/api/users', user)
      .then(function(res) {
        var JSONCurrentUser = JSON.parse($window.sessionStorage.currentUser);
        JSONCurrentUser.id = res.data._id;
        $window.sessionStorage.currentUser = JSON.stringify(JSONCurrentUser);
      })

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
    delete $window.sessionStorage.currentUser;
  };


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
