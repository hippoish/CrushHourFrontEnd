angular
  .module('CrushHourApp')
  .factory('facebookFactory', facebookFactory);

facebookFactory.$inject = ['$q'];

function facebookFactory($q) {
  return {
    getUserInfo: function() {
      var deferred = $q.defer();
      FB.api('/me', {
        fields: ['id', 'first_name', 'last_name', 'email', 'gender', 'location', 'interested_in']
      }, function (res) {
        if (!res || res.error) {
          deferred.reject('Error occured getting fb data.');
        } else {
          deferred.resolve(res);
          console.log('res is:',res)
        }
      });
      return deferred.promise
    }
  }
}
