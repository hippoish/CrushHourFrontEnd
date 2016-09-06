angular.module('crushHourApp')
  .controller('UsersController', UsersController);

UsersController.$inject = ['$http'];

function UsersController($http) {
  var self = this;

  self.allUsers = [];
  // self.getOneUser = getOneUser;

  function getUsers() {
    $http
      .get('https://crushhour.herokuapp.com/api/users')
      .then(function(res) {
        console.log(res.data.users);
        self.allUsers = res.data.users;
      }, function(errRes) {
        console.error('There was an error getting the users!', errRes);
      });
  }

  getUsers();

  // function getOneUser(user) {
  //   $http
  //     .get('https://crushhour.herokuapp.com/api/users' + user._id);
  // }

}
