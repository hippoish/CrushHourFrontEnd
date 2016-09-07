angular.module('CrushHourApp')
  .config(AppRoutes);

AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/home.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    });
}
