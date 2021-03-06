angular.module('CrushHourApp')
  .config(AppRoutes);

AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    // This is the pages branch
    .state('home', {
      url: '/',
      templateUrl: './templates/home.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    })
    .state('now', {
      url: '/now',
      templateUrl: './templates/now.html',
      controller: 'UsersController',
      controllerAs: 'usersCtrl'
    });

    $urlRouterProvider.otherwise('/');
}
