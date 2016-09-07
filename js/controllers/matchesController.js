angular.module('CrushHourApp')
  .controller('MatchesController', MatchesController);

MatchesController.$inject = ['$http'];

function MatchesController($http) {
  var self = this;

  self.allMatches = [];
  // self.getOneUser = getOneUser;

  function getMatches() {
    $http
      .get('https://crushhour.herokuapp.com/api/Matches')
      .then(function(res) {
        console.log(res.data.matches);
        self.allUsers = res.data.matches;
      }, function(errRes) {
        console.error('There was an error getting the matches!', errRes);
      });
  }

  getUsers();

  // function getOneUser(user) {
  //   $http
  //     .get('https://crushhour.herokuapp.com/api/users' + user._id);
  // }

}
