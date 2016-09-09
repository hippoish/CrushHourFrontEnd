angular.module('CrushHourApp')
  .controller('UsersController', UsersController);

UsersController.$inject = ['$http', 'NgMap', '$window'];

function UsersController($http, NgMap, $window) {
  var self = this;

  self.allUsers = [];
  self.getUsers = getUsers;
  // self.getOneUser = getOneUser;

  function getUsers() {
    $http
      .get('https://crushhour.herokuapp.com/api/users')
      .then(function(res) {
        console.log('data',res.data);
        self.allUsers = [];
        res.data.users.forEach(function(user) {
          self.allUsers.push(user);
        })
        console.log('users', self.allUsers)
        return self.allUsers;
      }, function(errRes) {
        console.error('There was an error getting the users!', errRes);
      });
  }

  // getUsers();
  //
  // function getOneUser(user) {
  //   $http
  //     .get('https://crushhour.herokuapp.com/api/users' + user._id)
  //     .then(function(res) {
  //       console.log(res.data.user);
  //       self.singleUser = res.data.user;
  //     })
  // }

  NgMap.getMap().then(function(map) {
    self.map = map;
  });

  self.getCurrentLocation = function(param) {
    console.log(/*'You are at' + */self.map.getCenter().lat());
    console.log(/*'You are at' + */self.map.getCenter().lng());
    // turn currentUser into JSON for manipulation
    var JSONCurrentUser = JSON.parse($window.sessionStorage.currentUser);
    // save current lat and long as JSONcurrentUser's current_location
    JSONCurrentUser.current_location = {lat: self.map.getCenter().lat(), lng: self.map.getCenter().lng()};
    // stringify JSONCurrentUser so it can be put back in sessionStorage w/ current_location
    $window.sessionStorage.currentUser = JSON.stringify(JSONCurrentUser);

    $http
      .patch('https://crushhour.herokuapp.com/api/users/' + JSONCurrentUser.id, JSONCurrentUser)
      .then(function(res) {console.log(res)})

    self.getUsers();
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
