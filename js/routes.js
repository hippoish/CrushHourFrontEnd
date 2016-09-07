angular.module('CrushHourApp')
  .config(AppRoutes);

AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    // This is the pages branch
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });
}
