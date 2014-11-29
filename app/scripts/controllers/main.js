'use strict';

/**
 * @ngdoc function
 * @name mediadashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediadashApp
 */
angular.module('mediadashApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
