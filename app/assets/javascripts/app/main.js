(function (window, angular, _, $, document) {
  'use strict';

  angular
  /**
   * Angular Js application
   */
    .module('app',
    [
      'ngResource',
      'ui.bootstrap'
    ])
    .run(['$rootScope', '$sce',
      function ($rootScope, $sce) {

        $rootScope.page = {
          title: 'Frontend Bootstrap',
          description: 'Basic setup for frontend applications.'
        }

      }]);

  /**
   *
   */
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });

}(window, window.angular, window._, window.jQuery, document));
