'use strict';

/**
 * @ngdoc function
 * @name mediadashApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mediadashApp
 */
angular.module('mediadashApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
