(function() {

  angular.module('CrushHourApp', ['satellizer', 'ui.router', 'ngMap'])
    .config(function($authProvider) {

      $authProvider.facebook({
        clientId: '1793210427603289',
        name: 'facebook',
        url: 'http://localhost:3000/auth/facebook',
        authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
        redirectUri: window.location.origin + '/',
        requiredUrlParams: ['display', 'scope'],
        scope: ['email'],
        scopeDelimiter: ',',
        display: 'popup',
        oauthType: '2.0',
        popupOptions: { width: 580, height: 400 }
      });
      //
      // $authProvider.google({
      //   clientId: 'crush-hour-1473133696259'
      // });

    })
})();
