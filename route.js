(function(){
  'use strict';
  angular
  .module('appRoutes', ['ui.router', 'oc.lazyLoad','ngMessages','angularCSS','ngCookies'])
  .config(configuration)
  .controller('tabCtrl', tabCtrl);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('instructor',{
      url: '/instructor',
      templateUrl: 'components/instructor/instructor.view.html',
      css: './css/style.instructor.css',
      resolve: {
		   load: ['$ocLazyLoad', function($ocLazyLoad){
		    return $ocLazyLoad.load('./components/instructor/instructor.controller.js')
		   }]
		  },
      controller: 'instructorController',
      controllerAs: 'vm'
    })

    .state('landing',{
      url: '/landing',
      templateUrl: 'components/landing/landing.view.html',
      css: './css/style.landing.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/landing/landing.controller.js')
       }]
      },
      controller: 'landingController',
      controllerAs: 'vm'
    })

    .state('admin',{
      url: '/admin',
      templateUrl: 'components/administrator/admin.view.html',
      css: './css/style.administrator.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/administrator/admin.controller.js')
       }]
      },
      controller: 'adminController',
      controllerAs: 'vm'
    })

    .state('login',{
      url: '/login',
      templateUrl: 'components/login/login.view.html',
      css: './css/style.login.css',
      resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad){
        return $ocLazyLoad.load('./components/login/login.controller.js')
       }]
      },
      controller: 'loginController',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/landing');
  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
 function run($rootScope, $location, $cookies, $http) {
     // El usuario continuo logeado aun despues de refrescar la pagina
     $rootScope.globals = $cookies.getObject('globals') || {};
     if ($rootScope.globals.currentUser) {
         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
     }
     $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // devuelve al login si entra a uno zona restrica, si no se encuentra logueado
            var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
                }
              });
       }

       function tabCtrl($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/");
                    break;
                case 1:
                    $location.url("/");
                    break;
                case 2:
                    $location.url("/");
                    break;
                case 3:
                    $location.url("/");
                    break;
                case 4:
                    $location.url("/");
                    break;
                case 5:
                    $location.url("/");
                    break;
            }
        });
    }
})();
