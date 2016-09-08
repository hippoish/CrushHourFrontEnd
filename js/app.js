
  angular.module('CrushHourApp', ['satellizer', 'ui.router', 'ngMap'])
    .config(AuthProvider);

  AuthProvider.$inject = ['$authProvider'];

  function AuthProvider($authProvider) {
    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = false;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = '/';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.tokenHeader = 'Authorization';
    $authProvider.tokenType = 'Bearer';
    $authProvider.storageType = 'localStorage';

    $authProvider.facebook({
      clientId: '788101691328322',
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

  }
