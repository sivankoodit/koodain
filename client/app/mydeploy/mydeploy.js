'use strict';

angular.module('koodainApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mydeploy', {
        url: '/mydeploy',
        templateUrl: 'app/mydeploy/mydeploy.html',
        controller: 'MydeployCtrl'
      });
  });
