angular
  .module('CrushHourApp')
  .factory('userStorageFactory', userStorageFactory);

userStorageFactory.$inject = ['$q'];

function userStorageFactory($q) {
  return {
    setUserInfo: function() {
      var deferred = $q.defer();
      FB.api('/me', {
        fields: ['id', 'first_name', 'last_name', 'email', 'gender', 'interested_in']
      }, function (res) {
        if (!res || res.error) {
          deferred.reject('Error occured getting fb data.');
        } else {
          console.log('2 res is:',res)
          deferred.resolve(res);
        }
      });
      return deferred.promise
    }
  }
}
