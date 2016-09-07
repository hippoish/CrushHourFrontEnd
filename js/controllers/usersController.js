angular.module('CrushHourApp')
  .controller('UsersController', UsersController);

UsersController.$inject = ['$http', 'NgMap'];

function UsersController($http, NgMap) {
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

  function getOneUser(user) {
    $http
      .get('https://crushhour.herokuapp.com/api/users' + user._id)
      .then(function(res) {
        console.log(res.data.user);
        self.singleUser = res.data.user;
      })
  }

  NgMap.getMap().then(function(map) {
    self.map = map;
  });
  self.callbackFunc = function(param) {
    console.log('You are at' + self.map.getCenter());
  };

  // function getUserLocation(user) {
  //   $http({
  //     method: 'POST',
  //     url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCERLgu8OusEW3WXrw-o7jaWfW4t6e9u8E',
  //     data: {
  //       'macaddress':
  //     }
  //   })
  // }

  // var geoLocation = {
  //   getLocation: function() {
  //     var deferred = $.Deferred();
  //     // if geo location is supported
  //     if(navigator.geolocation) {
  //       // get current position and pass the results to getPostalCode or time out after 5 seconds if it fails
  //       navigator.geolocation.getCurrentPosition(deferred.resolve, this.geoLocationError, {
  //           timeout: 5000
  //       });
  //     } else {
  //       //geo location isn't supported
  //       console.log('Your browser does not support Geo Location.');
  //     }
  //     return deferred.promise();
  //   },
  //   geoLocationError: function() {
  //     console.log('Geo Location failed.');
  //   }
  // };

  // function getOneUser(user) {
  //   $http
  //     .get('https://crushhour.herokuapp.com/api/users' + user._id);
  // }

}
